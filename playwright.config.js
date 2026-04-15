import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 60000,
  },
  reporter: 'html',
  use: {
    browserName: 'chromium',
    headless: true
  },
});
