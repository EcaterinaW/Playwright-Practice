import { NavigateToPage } from "./navigate";
import {Page} from "@playwright/test";
import { DashboardPage } from "./DashboardPage";


export class POManager
{
    navigateToPage: NavigateToPage;
    page: Page;
    dashboardPage:DashboardPage;

    constructor(page:Page)
    {
        this.page = page;
        this.navigateToPage = new NavigateToPage(page);
        this.dashboardPage = new DashboardPage(page);
    }

    getNavigateToPage()
    {
        return this.navigateToPage;
    }

    getDashboardPage()
    {
        return this.dashboardPage;
    }
};