// base.page.js
var base = require(`./BasePage`);

var LoginPage = Object.create(base, {

    // define elements
    inputUsername: { get: function () { return browser.element(`//input[@name='UserName']`); } },
    inputPassword: { get: function () { return browser.element(`//input[@placeholder='Password']`); } },

    buttonLogin: { get: function () { return browser.element(`//*[@class='logo logo-placeholder img-circle ng-star-inserted']`); } },

    // define or overwrite page methods
    open: { value: function() {
        base.open.call(this, browser.params.url.start);
    } }

});

module.exports = LoginPage;
