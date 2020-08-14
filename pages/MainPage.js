// base.page.js
var base = require(`./BasePage`);

var MainPage = Object.create(base, {

    // define elements
    buttonProducts: { get: function () { return browser.element(`//div[@data-pe-app='products']`); } },

    // define or overwrite page methods
    open: { value: function() {
        base.open.call(this, browser.params.url.start);
    } }

});

module.exports = MainPage;
