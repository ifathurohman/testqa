const {By, Key, Builder, until, logging } = require('selenium-webdriver');

require('chromedriver');

var URL = "https://todo-devcode.web.app/";
// var URL = "https://todo-4769a.web.app/";
// var URL = "https://ivan-todo-devrank.netlify.app/";

(async function test_case() {
  //get data 
  process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
  var request = require('request');
  var options = {
    'method'  : 'GET',
    'url'     : 'https://todo.api.devcode.gethired.id/activity-groups?email=n.latifahulfah@gmail.com',
    'headers' : {},
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    data            = JSON.parse(response.body);
    total_activity1 = data.total;
    console.log("total activity saat ini " + total_activity1);
  });
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
    // click tambah button activity
    await driver.findElement(By.xpath(`//div[@class="jss1"][1]//button[@data-cy="activity-add-button"]`)).click();
    process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
      var options1 = {
        'method'  : 'GET',
        'url'     : 'https://todo.api.devcode.gethired.id/activity-groups?email=n.latifahulfah@gmail.com',
        'headers' : {},
      };
      request(options1, function (error, response) {
      if (error) throw new Error(error);
      data1            = JSON.parse(response.body);
      total_activity2  = data1.total;
      total            = total_activity2 >= total_activity1;
      console.log(total_activity2);
      if(total === true){
        console.log('New Activity Success');
      }else{
        console.log('New Activity Failed');
      }
      console.log(data1.data[0].title);
      let d  = new Date(data1.data[0].created_at);
      let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
      let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
      let da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
      console.log(`${da} ${mo} ${ye}`);
    });
    // click button batal hapus activity
    await driver.findElement(By.xpath(`//div[@id='root']//div[1]//div[2]//*[name()='svg'][@data-cy="activity-item-delete-button"]`)).click();
    await driver.findElement(By.xpath(`//button[@class='jss11 jss20'][@data-cy="modal-delete-cancel-button"]`)).click();
    // click diluar modal batal hapus activity
    // await driver.findElement(By.xpath(`//div[@id='root']//div[1]//div[2]//*[name()='svg'][@data-cy="activity-item-delete-button"]`)).click();
    // await driver.findElement(By.xpath("//html")).click();
    // // click button hapus activity
    await driver.findElement(By.xpath(`//div[@id='root']//div[1]//div[2]//*[name()='svg'][@data-cy="activity-item-delete-button"]`)).click();
    await driver.findElement(By.xpath(`//div[@data-cy="modal-delete"]/div[@class="jss25"]/button[@data-cy="modal-delete-confirm-button"]`)).click();
    await driver.sleep(3000);
    let information = await driver.findElement(By.xpath(`//div[@class="jss5"]/div[@data-cy="modal-information"]/div[@data-cy="modal-information-title"]`)).getText();
    console.log(information);    
    // cek jumlah activity
      process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';
      var options2 = {
        'method'  : 'GET',
        'url'     : 'https://todo.api.devcode.gethired.id/activity-groups?email=n.latifahulfah@gmail.com',
        'headers' : {},
      };
      request(options2, function (error, response) {
      if (error) throw new Error(error);
      data2             = JSON.parse(response.body);
      total_activity3   = data2.total;
      total1            = total_activity3 === total_activity1;
      console.log(total_activity3);
      if(total1 === true){
        console.log('Jumlah activity sesuai');
      }else{
        console.log('Jumlah activity tidak sesuai');
      }
      // console.log(data1.data[0].title);
    });
  }
  driver.quit();
})();


