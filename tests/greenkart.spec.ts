import { test, expect } from '@playwright/test';
import { POManager } from '../pageobjects/POManager';

test("E2E flow", async ({ page }) => {
    const poManager = new POManager(page);
    
    const navigateToPage = poManager.getNavigateToPage();
    await navigateToPage.navigateToPage();

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.addCucumber();
    await dashboardPage.addTwoMangos();
    await dashboardPage.addPista("4");
    await dashboardPage.searchForProductAndAdd("Raspberry");
    await dashboardPage.goToCart();
    await dashboardPage.placeOrder();
    await dashboardPage.selectCountry('Moldova');
    await dashboardPage.agreeToTerms();
    await dashboardPage.proceed();


   

});