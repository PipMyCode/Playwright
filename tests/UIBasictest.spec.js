// Imports the test runner function from Playwright

import { test, expect } from '@playwright/test';
import expectedRestaurants from '../test-data/islandRestaurants.json' with { type: 'json' };

test('Browser Context Playwright test', async ({browser}) =>
{


       const context = await browser.newContext();
       const page = await context.newPage();
       const password = page.getByRole('textbox', { name: '••••••••' });
       const signIn = page.getByRole('button', { name: 'Sign In' });
       const restaurantLocator = page.getByRole('heading', {level: 2});
       await page.goto('https://www.gidispots.com/login');
       console.log(await page.title());
       await expect(page).toHaveTitle("GidiSpots | The Ultimate Lagos Dining Guide");
       await page.getByRole('textbox', { name: 'name@example.com'}).fill('adigunmarcus@gmail.com');
       await page.getByRole('textbox', { name: '••••••••'}).fill('12345678');
       await page.getByRole('button', { name: 'Sign In' }).click();
       await expect(page.getByText(/Invalid login credentials/i)).toBeVisible();
       await password.fill('*****')
       await signIn.click();
       await page.getByRole('button', {name: 'Island'}).click();
       await restaurantLocator.first().waitFor();

       console.log("Scrolling down to load more restaurants")
       for (let i = 0; i < 10; i++) {
         await page.evaluate(() => window.scrollBy(0, 1000));
         await page.waitForTimeout(1000);
       }

       const allRestaurants = await restaurantLocator.allTextContents();
       console.log(`Success! Found ${allRestaurants.length} restaurants on the Island:`);
       console.log(allRestaurants);
       expect(allRestaurants).toEqual(expect.arrayContaining(expectedRestaurants));
       expect(allRestaurants).not.toContain("Italawa settings");

       expect(allRestaurants.length).toBeGreaterThan(30);









});


test('Page Playwright test', async ({page }) =>
{
    await page.goto("https://www.google.com");
    //

});