import { Locator, Page } from "@playwright/test";

export default class SimpleForm {
    public page :Page;
    singleInput:Locator;
    getCheckedButton:Locator;
    singleInputResult:Locator;

    constructor(page:Page){
        this.page = page
        this.singleInput = page.getByPlaceholder('Please enter your Message');
        this.getCheckedButton = page.getByRole("button", {name: 'Get Checked Value'});
        this.singleInputResult = page.locator('#message');
    }

    async goto(){
        await this.page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    }

    async SetSingleInput(message : string){
        await this.singleInput.fill(message)
    }

    async ClickGetCheckedValueButton(){
        await this.getCheckedButton.click()
    }

    async getOutputLabel(){
        const val = await this.singleInputResult.innerText()
        return val;
    }

}