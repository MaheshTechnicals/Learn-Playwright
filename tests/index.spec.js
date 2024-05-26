const { test, expect } = require('@playwright/test')

test("Hona Page", async ({ page }) => {

    await page.goto('https://google.com/')

    let sitetitle = await page.title()

    await console.log(sitetitle)
    await page.close()

})