const { test, expect } = require("@playwright/test");
const fs = require("fs").promises; // Use the promise-based API

test("Locate Multiple Elements", async ({ page }) => {
    await page.goto("https://maheshtechnicals.com/");

    let links = await page.$$("img");
    let store = [];

    for (const link of links) {
        let title = await link.evaluate(el => el.src);

        store.push({ title });
    }

    console.table(store);
    await fs.writeFile("output.txt", JSON.stringify(store, null, 2)); // Convert to JSON and add formatting
});


// Some More Locators Are present which is inbuilt functions of playwright

//page.getByRole()
// page.getByText()
//page.getByLabel()
// page.getByPlaceholder()
// page.getByAltText()
// page.getByTitle()
// page.getByTestId()



//------------------------------CODE GEN IN PLAYWRIGHT------------------------------

// Playwright Code GEN - It will open browser with playwright tool. With this you can do task in browser and it will gebrate code for you so you can use it directly m

// Use this cammand to start code gen

// npx playwright codegen

// You have more options like you can specify a file name to store all code on that file automatically. Using this cammand :

// npx playwright codegen -O or --output tests/file.spec.js

// if you want to run this test in any browser you can use -b or --browser chromium like this.

// if you want to use Android or IPhone Device you can use it via --device "iphone 13"

// You can also specify viewport for that use --viewport "1080, 720"




