// Imports the test runner function from Playwright

import { test, expect } from '@playwright/test';
import expectedRestaurants from '../test-data/islandRestaurants.json' with { type: 'json' };

test.only('Browser Context-Validating Error login', async ({page}) =>
{
  await page.goto('https://rahulshettyacademy.com/client')
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('adigunmarcus@gmail.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('******');

  await page.getByRole('button', { name: 'Login' }).click();
  const productTitles = page.locator('.card-body b');
  await expect(productTitles.first()).toBeVisible();

  const allProductNames = await productTitles.allTextContents();
  console.log("Here are the products I found:", allProductNames);

  expect(allProductNames).toContain("iphone 13 pro");





});