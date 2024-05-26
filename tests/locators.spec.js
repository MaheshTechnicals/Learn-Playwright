const { test, expect } = require('@playwright/test')
const { log } = require('console')

test("locators", async ({ page }) => {

    await page.goto("https://googiehost.com/")

    // Locators - You can use locator() Or you can use action like click() Etc. 
    // Locators use for locating items on web page using attributes, CSS selectors, xpath. 
    let login = await page.click('text=Client Login')
    await page.fill("#inputEmail", "Enter_Your_Email")
    await page.fill("#inputPassword", "Password_Here")
    await page.click("#login")
    await page.click("text=Services")
    await page.close()
})