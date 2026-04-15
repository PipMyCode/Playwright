// Imports the test runner function from Playwright

import { test, expect } from '@playwright/test';

test.only('Browser Context Playwright test', async ({browser}) =>
{
    //chrome - plugins/ cookies

       const context = await browser.newContext();
       const page = await context.newPage();
       const password = page.getByRole('textbox', { name: '••••••••' });
       const signIn = page.getByRole('button', { name: 'Sign In' });
       await page.goto('https://www.gidispots.com/login');
       // Get title - assertion
       console.log(await page.title());
       await expect(page).toHaveTitle("GidiSpots | The Ultimate Lagos Dining Guide");
       // css , xpath
       await page.getByRole('textbox', { name: 'name@example.com'}).fill('adigunmarcus@gmail.com');
       await page.getByRole('textbox', { name: '••••••••'}).fill('12345678');
       await page.getByRole('button', { name: 'Sign In' }).click();
       await expect(page.getByText('Invalid login credentials')).toBeVisible();
       await password.fill('*****')
       await signIn.click();
       await expect(page.getByRole('heading', { name: 'Onlychow' })).toBeVisible();





});


test('Page Playwright test', async ({page }) =>
{
    await page.goto("https://www.google.com");
    //

});