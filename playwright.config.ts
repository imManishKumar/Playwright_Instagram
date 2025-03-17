import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // testDir: './POM_Tests',
  testDir: './tests',
  
  reporter: 'html',
 
  use: {
    baseURL: "https://www.instagram.com/",
    headless: false,
  
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
 ]
});
