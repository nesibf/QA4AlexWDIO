var startPage = require(`../../pages/StartPage`);
var loginPage = require(`../../pages/LoginPage`);

var assert = require('assert');

describe(`Test Login to Alex portal`, function () {

    it(`Open Login Page`, function () {
        startPage.open();
        browser.waitUntil(() => {
            return startPage.buttonLogin.isExisting();
        });
    });

    it(`Enter Credentials and Login`, function () {
        browser.waitUntil(() => {
            return startPage.buttonLogin.isExisting();
        });
      loginPage.inputUsername.setValue(browser.params.credentials.username);
      loginPage.inputPassword.setValue(browser.params.credentials.password);
      startPage.buttonLogin.click();
    });

    it(`Verify User Is Logged In`, function () {
        browser.waitUntil(() => {
            return loginPage.buttonLogin.isExisting();
        });
        loginPage.buttonLogin.click();
    });
});
