const assert  = require('assert');
const {Given, When, Then} = require('cucumber');

const path = require('path');
const { ServiceBuilder } = require('selenium-webdriver/firefox');
const { Builder, By, key, until } = require('selenium-webdriver');
const pathDriver = "/home/toticavalcanti/gama-academy/testes/tdd_dbb_jasmine_cucumber/driver/geckodriver";
const serviceBuilder = new ServiceBuilder(pathDriver); 
const driver = new Builder().forBrowser('firefox').setFirefoxService(serviceBuilder).build();

  Given('I\'m have {string} clients in my database', function (string) {
    console.log('Inseri os dados na base')
  });

  When('I access the homepage', async function () {
    await driver.get('http://localhost:3000')
    await driver.sleep(1000)
  });

  Then('See the list of {string} itens', async function (string) {
    let qtd = await driver.findElement(By.css('tbody tr'))
    assert.equal(qtd.length, parserInt(string))
    await driver.quit();
  });