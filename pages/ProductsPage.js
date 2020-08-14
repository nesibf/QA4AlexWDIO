// base.page.js
var base = require(`./BasePage`);

var MainPage = Object.create(base, {

    // define elements
    buttonProducts: { get: function () { return browser.element(`//div[text()='Products']`); } },
    buttonCollections: { get: function () { return browser.element(`//div[text()='Collections']`); } },

    buttonAddItem: { get: function () { return browser.element(`//*[@class='mat-button-rounded mat-raised-button mat-muted-white create-button']`); } },

    inputProdName: { get: function () { return browser.element(`//input[@id='mat-input-0']`); } },
    inputProdPrice: { get: function () { return browser.element(`//input[@id='mat-input-1']`); } },

    inputCollectName: { get: function () { return browser.element(`//*[@placeholder='Title']`); } },

    buttonInventory: { get: function () { return browser.element(`//*[contains(text(), 'INVENTORY')]`); } },
    inputProdCode: { get: function () { return browser.element(`//*[@placeholder='Code / SKU']`); } },

    buttonSave: { get: function () { return browser.element(`//*[contains(text(), 'Save')]`); } },

    // define or overwrite page methods
    open: { value: function() {
        base.open.call(this, browser.params.url.start);
    } }

});

module.exports = MainPage;
