import {test, expect } from '@playwright/test';

test.only('Search Bar Filters Results correctly', async ({ page }) => {
  await page.goto('https://www.gidispots.com/login');

  await page.getByRole('textbox', { name: 'name@example.com' }).fill('adigunmarcus@gmail.com');
  await page.getByRole('textbox', { name: '••••••••' }).fill('******');
  await page.getByRole('button', { name: 'Sign In' }).click();

  const searchBar = page.getByRole('textbox', { name: 'Search for spots...' });
  await searchBar.fill('Bay Lounge');

  const restaurantTitles = page.getByRole('heading', { level: 2 });

  await expect(restaurantTitles.filter({ hasText: 'Bay Lounge' })).toBeVisible();

  const filteredRestaurants = await restaurantTitles.allTextContents();
  console.log("Here are the filtered results:", filteredRestaurants);

  expect(filteredRestaurants).toContain('Bay Lounge');


})