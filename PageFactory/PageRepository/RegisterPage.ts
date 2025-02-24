// RegisterPage.ts
import { Page } from '@playwright/test';
import { RegisterPageObjects } from '../ObjectRepository/RegisterPageObjects';

export class RegisterPage {
    private page: Page;
    private locators = RegisterPageObjects;

    constructor(page: Page) {
        this.page = page;
    }

    async registerUser(userData: any) {
        await this.page.fill(this.locators.firstName, userData.firstName);
        await this.page.fill(this.locators.lastName, userData.lastName);
        await this.page.fill(this.locators.address, userData.address);
        await this.page.fill(this.locators.city, userData.city);
        await this.page.fill(this.locators.state, userData.state);
        await this.page.fill(this.locators.zipCode, userData.zipCode);
        await this.page.fill(this.locators.phone, userData.phone);
        await this.page.fill(this.locators.ssn, userData.ssn);
        await this.page.fill(this.locators.username, userData.username);
        await this.page.fill(this.locators.password, userData.password);
        await this.page.fill(this.locators.confirmPassword, userData.confirmPassword);
    }

    async submitRegistration() {
        await this.page.click(this.locators.registerButton);
    }
}