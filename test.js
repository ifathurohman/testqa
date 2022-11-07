const {By, Key, Builder, until } = require('selenium-webdriver');
require('chromedriver');

// var URL = "https://todo-devcode.web.app/";
var URL = "https://todo-4769a.web.app/";
// var URL = "https://ivan-todo-devrank.netlify.app/";

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
var request = require('request');
const { template } = require('@babel/core');
var options = {
  'method': 'GET',
  'url': 'https://todo.api.devcode.gethired.id/activity-groups?email=ivan@skyshi.com',
  'headers': {}
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  let data        = JSON.parse(response.body);
  var total_data  = data.total;

  (async function test_case() {
    //get data 
    console.log("total data activity " + total_data)
    // create driver
    let driver = await new Builder().forBrowser('chrome').build();
    // send driver to website
    await driver.get(URL);
    // ambil title
    if(URL === "https://todo-devcode.web.app/"){
      let title = await driver.findElement(By.xpath(`//div[@data-cy="header-background"][1]/div[@data-cy="header-title"]`)).getText();
      // tampil title
      console.log(title);
      // ambil activity title
      let activity = await driver.findElement(By.xpath(`//div[@class="jss1"][1]/div/h1[@data-cy="activity-title"]`)).getText();
      // tampil activity
      console.log(activity);
      // click button activity
      if (await driver.findElement(By.xpath(`//div[@class="todo-header"][1]/button[@data-cy="activity-add-button"]`)).click()) {
        console.log('New Activity Success');
      } else {
        console.log('New Activity Failed');
      }
    }else if(URL === "https://todo-4769a.web.app/"){
      let title = await driver.findElement(By.xpath(`//div[@data-cy="header-background"][1][@data-cy="header-background"]/div[@class="header-content"]/p[@data-cy="header-title"]`)).getText();
      // tampil title
      console.log(title);
      let activity = await driver.findElement(By.xpath(`//div[@class="home-header"][1]/p[@data-cy="activity-title"]`)).getText();
      // tampil activity
      console.log(activity);
      // click button activity
      await driver.findElement(By.xpath(`//div[1]/button[@data-cy="activity-add-button"]/p`)).click();
    }else if(URL === "https://ivan-todo-devrank.netlify.app/"){
      let title = await driver.findElement(By.xpath(`//div[@data-cy="header-background"][1]/h2[@data-cy="header-title"]`)).getText();
      // tampil title
      console.log(title);
      let activity = await driver.findElement(By.xpath(`//div[@class="todo-header"][1]/h1[@data-cy="activity-title"]`)).getText();
      // tampil activity
      console.log(activity);
      // click button activity
      if (driver.findElement(By.xpath(`//div[@class="todo-header"][1]/button[@data-cy="activity-add-button"]`)).click()) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
        var request = require('request');
        var options = {
          'method': 'GET',
          'url': 'https://todo.api.devcode.gethired.id/activity-groups?email=ivan@skyshi.com',
          'headers': {}
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
          var data1         = JSON.parse(response.body);
          var total_data1   = data1.total;

          if(total_data != total_data1){
            console.log('New Activity Success');
            console.log(total_data1);
          } else {
            console.log('New Activity Failed');
            console.log(total_data1);
          }
        });


      }
    }

    driver.quit();
  })();
});

