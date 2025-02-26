import { test, expect } from '@playwright/test';

test(`@browserlaunch Verify homepage is loading and the title of the page`, async ({page, baseURL}) => {
    await page.goto(`${baseURL}`);
    //await page.delay(2000);
    await expect(page).toHaveTitle('ParaBank | Register for Free Online Account Access');
});