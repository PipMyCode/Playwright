import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 40000,
  expect: {
    timeout: 50000,
  },
  reporter: 'html',
  use: {
    browserName: 'webkit',
    headless: false
  },
});
