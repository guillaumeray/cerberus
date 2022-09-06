const I = actor();

module.exports = {

  // product
  addProductToCart: "//a[@data-id-product='1']",
  goCheckOut: "a[title='Proceed to checkout']",

  async IAddProductToCart(productNumber) {
    //let lc = this.addProductToCart.replace('%s', productNumber)
    let lc = this.addProductToCart
    await I.waitForElement(lc, 5);
    await I.click(lc);
  },

  async goCheckOut() {
    await I.waitForElement(this.goCheckOut, 5);
    await I.click(this.goCheckOut);
  }

};
