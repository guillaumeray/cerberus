const I = actor();

module.exports = {

  //customer
  firstName: "input[name='firstName']",
  lastName: "input[name='lastName']",
  mail: "input[name='email']",
  phone: "input[name='mobilephone']",
  submitForm: "//button[@data-selenium-test='forward-button']",

  async fillCustomerInfo(firstName, lastName, mail, phone) {
    await I.waitForElement(this.firstName, 5);
    await I.fillField(this.firstName, firstName);
    await I.fillField(this.lastName, lastName);
    await I.fillField(this.mail, mail);
    await I.fillField(this.phone, phone);
    await I.wait(2)
    //await I.click(this.submitForm);
  },

};
