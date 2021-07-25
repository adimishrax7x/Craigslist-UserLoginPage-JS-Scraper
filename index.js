//This Code snippet aims at Scraping Data from the user profile page of Cragislist using puppeteer.

const puppeteer = require('puppeteer');

async function main(){

    try{
        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();

        var url="https://accounts.craigslist.org/login";//login page url
        await page.goto(url);

        userEmailSelector="#inputEmailHandle";//form email input Selector
        userPasswordSelector="#inputPassword";//form Password input Selector

        userEmail="";//enter registered account email
        userPassword="";//enter registered account password

        await page.type(userEmailSelector,userEmail);
        await page.type(userPasswordSelector,userPassword);
        await page.click("#login");

        await page.waitForNavigation();
        //await page.setDefaultNavigationTimeout(0); 
        var loggedInUrl="https://accounts.craigslist.org/login/home?show_tab=settings";//link to the page you desire to navigate to
        //sometimes 'Navigation timeout of 30000 ms exceeded' depending on your internet connection error might show up, try re-running .
        await page.goto(loggedInUrl, {waitUntil: 'load'}); 

        //using cheerio selectors elements can be selected and saved onto the desired DB.

    }
    catch(err){
        console.log(err);
    }
}

main();