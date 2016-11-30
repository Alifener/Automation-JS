'use strict';

var driver = require('./world.js').getDriver();
var fs = require('fs');
var path = require('path');

var myHooks = function () {

    this.After(function(scenario) {
        return this.driver.manage().deleteAllCookies();
    });

    this.registerHandler('AfterFeatures', function (event) {
        return driver.quit();
    });

};

module.exports = myHooks;
