// Register.test.ts
import { test, expect } from '@playwright/test';
import { RegisterPage } from '../PageFactory/PageRepository/RegisterPage'
import { registerData } from '../data/RegisterData';

const BASE_URL = 'https://parabank.parasoft.com/parabank/register.htm';

test.describe('User Registration Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(BASE_URL);
    });

    test('Successful user registration', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.registerUser(registerData.validUser);
        await registerPage.submitRegistration();
        //await expect(page.locator('text=Your account was created successfully')).toBeVisible();
    });

    // test('Registration with missing fields', async ({ page }) => {
    //     const registerPage = new RegisterPage(page);
    //     await registerPage.fillRegistrationForm(registerData.missingFieldsUser);
    //     await registerPage.submitRegistration();
    //     await expect(page.locator('text=This field is required')).toBeVisible();
    // });
});