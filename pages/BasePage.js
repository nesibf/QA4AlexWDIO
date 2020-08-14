function BasePage() {
    this.title = `Base Page`;
}

BasePage.prototype.open = function (path) {
    browser.url(path)
};

BasePage.prototype.openNewWindow = function (path) {
    browser.newWindow(path)
};

module.exports = new BasePage();
