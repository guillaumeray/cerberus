const I = actor();

module.exports = {

  // book
  dayToSelect: "//button[@aria-label='August %sth']",
  hourToSelect: "//span[text()='%s']",

  //customer
  firstName: "input[name='firstName']",
  lastName: "input[name='lastName']",
  mail: "input[name='email']",
  phone: "input[name='mobilephone']",
  submitForm: "//button[@data-selenium-test='forward-button']",

  async bookAppointment(day, hour) {
    // day
    await I.waitForElement(this.dayToSelect.replace('%s', day), 5);
    await I.click(this.dayToSelect.replace('%s', day));
    await I.wait(3)
    // hour
    await I.waitForElement(this.hourToSelect.replace('%s', hour), 5);
    await I.click(this.hourToSelect.replace('%s', hour));
    await I.wait(3)
  },

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
