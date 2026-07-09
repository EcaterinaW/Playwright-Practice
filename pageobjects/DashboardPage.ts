import { Page,Locator,expect } from "@playwright/test";

export class DashboardPage {
    page: Page;
    cucumber:Locator;
    mango:Locator;
    mangoIncrement:Locator;
    pistaQuantity:Locator;
    pista:Locator;
    searchBar:Locator;
    searchButton:Locator;
    cartIcon:Locator;
    proceedToCheckout:Locator;
    placeOrderButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.cucumber = (page.locator('.product').filter({
            hasText: 'Cucumber - 1 Kg',
        })).getByRole('button', { name: 'ADD TO CART' });
        this.mangoIncrement = (page.locator('.product').filter({
            hasText: 'Mango - 1 Kg',
        })).locator(".increment");
        this.mango = (page.locator('.product').filter({
            hasText: 'Mango - 1 Kg',
        })).getByRole('button', { name: 'ADD TO CART' });
        this.pistaQuantity = (page.locator('.product').filter({
            hasText: 'Pista - 1/4 Kg',
        })).locator(".quantity");
        this.pista = (page.locator('.product').filter({
            hasText: 'Pista - 1/4 Kg',
        })).getByRole('button', { name: 'ADD TO CART' });
        this.searchBar = page.getByPlaceholder("Search for Vegetables and Fruits");
        this.searchButton = page.locator('button[type="submit"]');
        this.cartIcon = page.locator("a.cart-icon");
        this.proceedToCheckout = page.getByRole('button', {name:'PROCEED TO CHECKOUT'});
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
    }

    async addCucumber() {
       
        await this.cucumber.click();
    }

    async addTwoMangos(){
        await this.mangoIncrement.click();
        await this.mango.click();
    }

    async addPista(amountPista:any){
        await this.pistaQuantity.clear();
        await this.pistaQuantity.fill(amountPista);
        await this.pista.click();
    }

    async searchForProductAndAdd(product:string){
        await this.searchBar.fill(product);
        await this.searchButton.click();
        const result = this.page.locator('.product').filter({
        hasText: product
    });

    await expect(result).toContainText(product);
    await result.locator('input.quantity').clear();
    await result.locator('input.quantity').fill("1");
    await result.getByRole('button', { name: 'ADD TO CART' }).click();
    }

    async goToCart(){
        await this.cartIcon.click();
        await this.proceedToCheckout.click();
    }

    async placeOrder(){
        await this.placeOrderButton.click();
    }
}