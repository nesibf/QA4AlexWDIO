exports.config = {
    specs: ['./tests/**/*.js'],
    // specs: ['./tests/**/LoginTest.js'],
    // specs: ['./tests/**/AddProductTest.js'],
    // specs: ['./tests/**/AddCollectionTest.js'],
    // specs: ['./tests/**/EditCollectionTest.js'],
    // specs: ['./tests/**/DeleteCollectionTest.js'],
    exclude: ['./node_modules/**/*.js'],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        },
    ],

    // Test Configuration
    sync: true,

    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'error',

    coloredLogs: true,

    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,

    // screenshotPath: './errorShots/',
    baseUrl: '/',
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['selenium-standalone'],

    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        //  Timeout is being uncommented as the independent schools dropdown requires
        // a larger timeout value than 10000ms threshold
        timeout: 9999999, //uncomment this if you want to use browser.debug() in your tests
        // timeout: 50000, //uncomment this if you want to use browser.debug() in your tests
        ui: 'bdd',
        compilers: ['js:babel-register'],
    },

    before: function () {
        let environmentParams = {};
        process.argv.forEach(function (argument) {
            if (argument.startsWith('--env=')) {
                const bits = argument.split('=');
                const env = bits[1];
                environmentParams = require(`./../environment/${env}.js`);
            }
        });
        browser.params = environmentParams;
    },

    afterTest(test) {
        if (test.passed === false) {
            return browser.saveScreenshot(`./errorShots/${test.title}.png`);
        }
    }
};
