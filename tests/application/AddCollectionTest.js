var startPage = require(`../../pages/StartPage`);
var loginPage = require(`../../pages/LoginPage`);
var mainPage = require(`../../pages/MainPage`);
var prodPage = require(`../../pages/ProductsPage`);

var assert = require('assert');

describe(`Test Adding Collection`, function () {


  it(`Open The Main Page`, function () {
    startPage.open();
    browser.waitUntil(() => {
      return startPage.buttonLogin.isExisting();
    });
    loginPage.inputUsername.setValue(browser.params.credentials.username);
    loginPage.inputPassword.setValue(browser.params.credentials.password);
    startPage.buttonLogin.click();

    browser.waitUntil(() => {
      return loginPage.buttonLogin.isExisting();
    });
    loginPage.buttonLogin.click();
  });

  it(`Add Collection`, function () {
    browser.waitUntil(() => {
      return mainPage.buttonProducts.isExisting();
    });
    mainPage.buttonProducts.click();
    browser.waitUntil(() => {
      return prodPage.buttonProducts.isExisting();
    });
    prodPage.buttonCollections.click();

    prodPage.buttonAddItem.click();

    browser.waitUntil(() => {
      return prodPage.inputProdName.isExisting();
    });
    prodPage.inputCollectName.setValue(browser.params.collection.name);

    prodPage.buttonSave.click();

  });

});
