// Imports the test runner function from Playwright

import { test, expect } from '@playwright/test';

test('Browser Context Playwright test', async ({browser}) =>
{
    //chrome - plugins/ cookies
       const context = await browser.newContext();
       const page = await context.newPage();
       await page.goto("https://www.gidispot.com/login");

});


test('Page Playwright test', async ({page }) =>
{
    await page.goto('https://www.gidispot.com/login');
    //


});