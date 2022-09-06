const I = actor();

module.exports = {

  // main header
  mainHeader: "body#index",
  // menu
  linkText: "//a[text()='%s']",

  async ICheckHomePage() {
    await I.seeElement({css: this.mainHeader});
  },

  async ISelectMenuLink(menu) {
    await I.waitForElement(this.linkText.replace('%s', menu), 5);
    await I.click(this.linkText.replace('%s', menu));
  },

};
