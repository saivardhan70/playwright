import { test, expect } from '@playwright/test';

test(`@browserlaunch Verify homepage is loading and the title of the page`, async ({page}) => {
    await page.goto('https://demo.opencart.com/');
    //await page.delay(2000);
    await expect(page).toHaveTitle(/Your Store/);
});