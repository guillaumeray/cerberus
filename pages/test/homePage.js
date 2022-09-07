const I = actor();

module.exports = {
  // menu
  linkStart: "//a/div[text()='Start now']",
  linkStartPage: "//a[text()='Start Now']",
  // form
  firstNameInput: "//input[@name='First-name']",
  lastNameInput: "//input[@name='Last-Name']",
  mailInput: "//input[@name='Email']",
  companyInput: "//input[@name='Enter-your-company-name']",
  websiteInput: "//input[@name='Website-URL']",
  checkbox: "//span[@for='checkbox-2']",
  submit: "//form[@id='wf-form-Start-now-form']/input[@type='submit']",

  async ISelectMenuLink() {
    await I.waitForElement(this.linkStart, 5);
    await I.click(this.linkStart);
    await I.waitForElement(this.linkStartPage, 5);
    await I.click(this.linkStartPage);
    await I.wait(5)
  },

  async IFillForm(firstname, lastname, mail, company, website) {
    await I.waitForElement(this.firstNameInput, 5);
    await I.fillField(this.firstNameInput, firstname);
    await I.waitForElement(this.lastNameInput, 5);
    await I.fillField(this.lastNameInput, lastname);
    await I.waitForElement(this.mailInput, 5);
    await I.fillField(this.mailInput, mail);
    await I.waitForElement(this.companyInput, 5);
    await I.fillField(this.companyInput, company);
    await I.waitForElement(this.websiteInput, 5);
    await I.fillField(this.websiteInput, website);
    await I.click(this.checkbox);
    await I.wait(2)
    await I.click(this.submit)
    await I.wait(5)
  },

};
