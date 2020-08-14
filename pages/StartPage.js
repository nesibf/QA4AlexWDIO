// base.page.js
var base = require(`./BasePage`);

var StartPage = Object.create(base, {

    // define elements
    buttonLogin: { get: function () { return browser.element(`//*[@class="mat-button-wrapper"]`); } },

    // define or overwrite page methods
    open: { value: function() {
        base.open.call(this, browser.params.url.start);
    } }

});

module.exports = StartPage;
