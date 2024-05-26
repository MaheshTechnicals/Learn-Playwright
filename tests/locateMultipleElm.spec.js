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
