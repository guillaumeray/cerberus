const { I, homePage, catalogPage } = inject();

// general

Given(/^I am on home page$/, async function () {
    await I.amOnPage('/');
});

Given(/^I select menu link start now$/, async function () {
    await homePage.ISelectMenuLink();
});

Given(/^I fill customer information$/, async function (table) {
    let firstName;
    let lastName;
    let mail;
    let company;
    let website;

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
        company = cells[3].value;
        website = cells[4].value;
    }
    await homePage.IFillForm(firstName, lastName, mail, company, website) 
});





