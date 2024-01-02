import { Locator, Page } from "@playwright/test";

export default class RangeSliders {
    public page :Page;
    slider15: Locator
    slider15Label: Locator

    constructor(page:Page){
        this.page = page
        this.slider15 = page.locator('#slider3').getByRole('slider');
        this.slider15Label = page.locator('#rangeSuccess');
    }

    async goto(){
        await this.page.goto("https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo")
    }

    async setSlider15(val : string){
        await this.slider15.fill(val);
    }

    async getSlider15Label(){
        const val = await this.slider15Label.innerText()
        return val;
    }

}