import { Page } from '@playwright/test';

export class NavigateToPage {
    page:Page;

    constructor(page:Page)
    {
        this.page = page;
    }

    async navigateToPage()
    {
        await this.page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    }
}

