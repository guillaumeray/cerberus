'use strict';
let Helper = codecept_helper;

class WebHelper extends Helper {
 
  driver = 'WebDriver';

  async _init() {
  }

  async _before(test) {
  }

  async getBaseUrl() {
    return this.helpers[this.driver].browser.options.baseUrl;
  }

  /* webdriver override
    xpath : String
    timeout : number (ms)
    throwError : boolean
    return true if element found
    return false if element not found OR throw error
  */
  async waitForElementVisible(xpath, timeout = 5000, throwError = true, clickable = false, silent = false) {
    const helper = this.helpers[this.driver].browser;
    let err;
    let loop = timeout / 1000;
    let element;

    for (var i = 0; i < loop; i++) {
      element = await helper.waitUntil(async () => {
        return await helper.$(xpath);
      }, 1000);
      if (await element.isExisting() && await element.isDisplayed()) {
        if (clickable) {
          if (element.isClickable()) {
            break;
          }
        } else {
          break;
        }
      }
      await new Promise(r => setTimeout(r, 1000));
    }

    if (await element.isExisting() && await element.isDisplayed()) {
      if (clickable) {
        if (element.isClickable()) {
          return true;
        }
        console.log('== Element ' + xpath + ' not clickable');
        return false;
      } else {
        return true;
      }
    } else {
      if (!silent) {
        var errorMsg = typeof element.error !== 'undefined' ? element.error.message : '';
        err = "Element not found " + timeout + " ms : " + errorMsg;
        console.log(err);
      }
    }
    if (throwError) {
      throw "Wait for element error : " + err;
    }
    return false;
  }

  async switchToNewWindow() {
    const bw = this.helpers[this.driver].browser;
    const w = await bw.getWindowHandles();
    await bw.switchToWindow(w[1]);
  }

  async switchToOriginalWindow() {
    const bw = this.helpers[this.driver].browser;
    const w = await bw.getWindowHandles();
    await bw.switchToWindow(w[0]);
  }

  async acceptAlert() {
    const bw = this.helpers[this.driver].browser;
    await bw.acceptAlert();
  }

  async scrollUp(scroll = -1000) {
    await this.helpers[this.driver].browser.execute((scroll) => {
      window.scrollBy(0, scroll);
    }, scroll);
  }

  async scrollDown() {
    await this.helpers[this.driver].browser.execute(() => {
      window.scrollBy(0, 800);
    });
  }

  async getUserAgent() {
    return await this.helpers[this.driver].browser.execute(() => {
      return navigator.userAgent;
    });
  }

  async clearFieldByJs(fieldSelector, number = 0) {
    await this.helpers[this.driver].browser.execute((fieldSelector, number) => {
      var el = document.querySelectorAll(fieldSelector);
      el[number].value = '';
    }, fieldSelector, number);
  }

  async getInputValueByJs(selector, number = 0) {
    let value = await this.helpers[this.driver].browser.execute((selector, number) => {
      var el = document.querySelectorAll(selector);
      return el[number].value;
    }, selector, number);
    return value;
  }

  async setLocalStorage(name, value) {
    await this.helpers[this.driver].browser.execute((name, value) => {
      window.localStorage[name] = value;
    }, name, value);
  }

  async scrollToElementBySelector(selector, number = 0) {
    await this.helpers[this.driver].browser.execute((selector, number) => {
      var el = document.querySelectorAll(selector);
      el[number].scrollIntoView();
    }, selector, number);
  }

  async scrollToElementBySelectorAndText(
    firstElementSelector,
    secondElementSelector,
    text) {
    return await this.helpers[this.driver].browser.execute((
      firstElementSelector,
      secondElementSelector,
      text) => {
      var el = document.querySelectorAll(firstElementSelector);
      for (e of el) {
        if (text === e.querySelector(secondElementSelector).text) {
          e.scrollIntoView();
          return e;
        }
      }
    },
      firstElementSelector,
      secondElementSelector,
      text);
  }

  async dragElementTo(selOrigin, selTarget) {
    let bs = this.helpers[this.driver].browser;
    const elem = await bs.$(selOrigin);
    const target = await bs.$(selTarget);
    await elem.dragAndDrop(target);
  }

  async scrollDownUntillElementFound(selector) {
    var i = 0;
    var isFound = false;
    while (isFound === false && i < 5) {
      isFound = await this.waitForElementVisible(selector, 1000, false, true);
      await this.helpers[this.driver].browser.execute(() => {
        window.scrollBy(0, 70);
      });
      i++;
    }
    if (!isFound) {
      throw "scroll untill element found error, element " + selector + " not found";
    }
  }

  // js

  async clickByJavascriptCss(css, number = 0) {
    await this.helpers[this.driver].browser.execute((css, number) => {
      var el = document.querySelectorAll(css);
      el[number].click();
    }, css, number);
  }

  async isChecked(elementSelector) {
    return await this.helpers[this.driver].browser.execute((elementSelector) => {
      var el = document.querySelector(elementSelector);
      return el.checked;
    }, elementSelector);
  }

  // number management

  async stringToFloat(string) {
    let float = await string.replace(',', '.');
    float = await float.replace(/^\D+/g, '');
    return parseFloat(float);
  }

  async floatToString(float) {
    let st = float.toString();
    return await st.replace('.', ',');
  }

}


module.exports = WebHelper;
