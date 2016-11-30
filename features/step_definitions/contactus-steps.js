'use strict';

var expect = require('chai').expect;

module.exports = function() {
  this.World = require('../support/world.js').World;

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 15; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

  this.Given(/^I go to Yoti web site$/, function () {
    this.driver.get('http://www.yoti.com');
  });

  this.When(/^I click on the menu$/, function () {
    var menuButton = this.driver.findElement({ css: '.hamburger' });
    menuButton.click();
  });

  this.Then(/^I should be able to see Contact us in the opened menu$/, function () {
    this.driver.findElement({ css: '#yoti-menu-sidebar .parent[href="/contact"]'});
  });

  this.When(/^I click on Contact us$/, function () {
    var contactButton = this.driver.findElement({ css: '#yoti-menu-sidebar .parent[href="/contact"] span'});
    this.driver.wait(function(){
        return contactButton.isDisplayed();
    }, 1000)
        .then(function(){
            contactButton.click();
        });
    });

  this.When(/^I expand "([^"]*)" section$/, {timeout : 5000},function (whatToExpand) {

       if (whatToExpand == "I have a question about my Yoti") {
           var elemMyYoti = this.driver.findElement({css: '.container-fluid #lets-talk-section'});
           elemMyYoti.click();
       }
       else if (whatToExpand == "I have a business question") {
           var elemBussiness = this.driver.findElement({css: '.option.bg-primary-1.dark-bg.row'});
           elemBussiness.click();
      }
  });

  this.When(/^I submit the "([^"]*)" form$/, function (typeForm) {

      var locatorForm="";
      var myYotiForm="my Yoti";
      var businessForm="business";
      if(typeForm == myYotiForm){
        locatorForm="#contact-question-form";
      }
      else if(typeForm == businessForm){
        locatorForm="#contact-business-form";
      }
      this.driver.findElement({css: locatorForm +" #nameInput"}).sendKeys(makeid());
      this.driver.findElement({css: locatorForm +" #emailInput"}).sendKeys(makeid()+"@gmail.com");
      if(typeForm == businessForm){
           this.driver.findElement({css: locatorForm +" #companyInput"}).sendKeys(makeid());
      }
      this.driver.findElement({css: locatorForm +" #messageInput"}).sendKeys(makeid());
      var sendButton = this.driver.findElement({ css: locatorForm +" button"});

      this.driver.wait(function(){
          return sendButton.isDisplayed();
      }, 1000)
          .then(function(){
              sendButton.click();
          });
      });

    this.Then(/^I should see the confirmation message for "([^"]*)" form$/, {timeout : 5000}, function (typeForm) {

        var locatorConfMsg = "";
        var myYotiForm = "my Yoti";
        var businessForm = "business";

        if (typeForm == myYotiForm) {
            locatorConfMsg = "#contact-question-received";
        } else if (typeForm == businessForm) {
        locatorConfMsg = "#contact-business-received";
        }
        var confirmationMessageElem = this.driver.findElement({ css: locatorConfMsg});
        this.driver.wait(function(){
            return confirmationMessageElem.isDisplayed();
        }, 5000);
    });
};