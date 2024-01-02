import { Locator, Page } from "@playwright/test";


export default class SeleniumPlayground {
    public page :Page;

    constructor(page:Page){
        this.page = page
    }

    async goto(){
        await this.page.goto("https://www.lambdatest.com/selenium-playground")
    }

    getLinkLocator(module : string){
        return this.page.getByRole('link', {name : module})
    }

    async ClickOnModule(module : string){
        const loc = this.getLinkLocator(module)
        await loc.click();
    }




}