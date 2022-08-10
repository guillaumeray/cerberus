const { I, homePage, bookingPage } = inject();

// general

Given(/^I am on home page$/, async function () {
    await I.amOnPage('https://www.coinhouse.com/');
    await homePage.ICheckHomePage();
});

Given(/^I select menu link "(.*)" and sub menu "(.*)"$/, async function (mainMenu, subMenu) {
    await homePage.ISelectMenuLink(mainMenu, subMenu);
});

Given(/^I accept cookies$/, async function () {
    await homePage.acceptCookies();
});

Given(/^I select a private appointment for day "(.*)" time "(.*)"$/, async function (day, time) {
    await homePage.IClickBookAppointment();
    await I.switchToNewWindow();
    await bookingPage.bookAppointment(day, time);
});

Given(/^I fill customer information for appointment$/, async function (table) {
    let firstName;
    let lastName;
    let mail;
    let phone;
    for (const id in table.rows) {
        if (id < 1) {
          continue; // skip a header of a table
        }
    
        // go by row cells
        const cells = table.rows[id].cells;
    
        // take values
        firstName = cells[0].value;
        lastName = cells[1].value;
        mail = cells[2].value;
        phone = cells[2].value;
    }
    await bookingPage.fillCustomerInfo(firstName, lastName, mail, phone)
});





