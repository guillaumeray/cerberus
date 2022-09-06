const { I, homePage, catalogPage } = inject();

// general

Given(/^I am on home page$/, async function () {
    await I.amOnPage('');
    await homePage.ICheckHomePage();
});

Given(/^I select menu link "(.*)"$/, async function (menu) {
    await homePage.ISelectMenuLink(menu);
});

Given(/^I add product "(.*)" to cart$/, async function (product) {
    await catalogPage.IAddProductToCart(product);
    await catalogPage.goCheckOut();
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
});





