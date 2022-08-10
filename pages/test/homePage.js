const I = actor();

module.exports = {

  // main header
  mainHeader: "header#main-header",
  // menu
  linkText: "//a[text()='%s']",

  async ICheckHomePage() {
    await I.waitForElement(this.mainHeader, 5);
    await I.seeElement({xpath: this.mainHeader});
  },

  async acceptCookies(link = 'Accept') {
    await I.waitForElement(this.linkText.replace('%s', link), 5);
    await I.click(this.linkText.replace('%s', link));
  },

  async ISelectMenuLink(mainMenu, subMenu) {
    await I.waitForElement(this.linkText.replace('%s', mainMenu), 5);
    await I.click(this.linkText.replace('%s', mainMenu));
    await I.waitForElement(this.linkText.replace('%s', subMenu), 5);
    await I.click(this.linkText.replace('%s', subMenu));
  },

  async IClickBookAppointment() {
    let appointmentType = 'Private';
    await I.waitForElement(this.linkText.replace('%s', appointmentType), 5);
    await I.click(this.linkText.replace('%s', appointmentType));
  },

};
