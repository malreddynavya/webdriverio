import {Given,When,Then} from 'cucumber';

const valueContent = require('C:\\Users\\nmalreddygar\\Documents\\WDIO\\testdata\\loginData.json');

let usernamevalue=valueContent["username"];
let passwordvalue=valueContent["password"];
let groupnamevalue=valueContent["groupname"];
let peoplenamevalue=valueContent["peoplename"];

Given(/^I'm on the login page$/,function() {
    try {
        browser.url("https://www.facebook.com/");
        browser.maximizeWindow();
    }catch (error)
    {
        console.log(error);
    }

   });
When(/^I login in with a registered user$/,function() {
   try{
   $('//input[@id="email"]').setValue(usernamevalue);
   $('//input[@id="pass"]').setValue(passwordvalue);
   $('//label[@id="loginbutton"]').click();
   } 
   catch(error)
   {
        console.log(error);
   }
});

Then(/^I shall be on the facebook  home page.$/,function() {
    try{
    var strurl=browser.getUrl();
    console.log(" the url is :"+strurl)
    }
    catch(error)
    {
        console.log(error);
    }
});
Given(/^I am on the home page$/,function()
{
    try{
    $("//a[text()='Home']").click();
    }
    catch(error)
    {
        console.log(error);
    }
});
When(/^Able to create a gruoup$/,function()
{
    try{
    $("//div[text()='Groups']").click();
    browser.pause(4000);
    $("//button[text()='Create Group']").click();
    $("//input[@name='name']").setValue(groupnamevalue);
    $("//input[@placeholder='Enter names or email addresses...']").setValue(peoplenamevalue);
    $("//button[text()='Create']").click();
    }
    catch(error){
        console.log(error);
    }
});

Then(/^I shall be able to leave  and delete the created group and perform logout$/,function() {
    try{
    browser.pause(5000)
    $("//span[text()='Webdriverio-cucumber']").click();
    browser.pause(4000);
    $("//span[text()='Joined']").click();
    browser.pause(3000);
    $("//span[text()='Leave Group']").click();
    $("//button[@name='confirmed']").click();
    $("//div[text()='Close']").click();
    browser.pause(3000);
    $("//div[@id='userNavigationLabel']").click();
    $("//span[text()='Log Out']").click();
    }
    catch(error)
    {
        console.log(error);
       
    }
}
);

    

