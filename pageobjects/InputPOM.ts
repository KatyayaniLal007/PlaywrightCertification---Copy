import { Locator, Page } from "@playwright/test";

export default class InputForm {
    public page :Page;
    submitBtn : Locator;
    Name : Locator;
    Email : Locator;
    Password : Locator
    Company : Locator
    Website : Locator
    CountryDbox : Locator
    City : Locator
    Address1 : Locator
    Address2 : Locator
    State : Locator
    Zipcode : Locator

    constructor(page:Page){
        this.page = page
        this.submitBtn = page.getByRole("button",{name : 'Submit'})
        this.Name = page.locator("#name")
        this.Email = page.locator("#inputEmail4")
        this.Password = page.locator("#inputPassword4")
        this.Company = page.locator("#company")
        this.Website = page.locator("#websitename")
        this.CountryDbox = page.getByRole('combobox')
        this.City = page.locator("#inputCity")
        this.Address1 = page.locator("#inputAddress1")
        this.Address2 = page.locator("#inputAddress2")
        this.State = page.locator("#inputState")
        this.Zipcode = page.locator("#inputZip")

    }

    async goto(){
        await this.page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo")
    }

    //Function to fill the form with pre-set values
    async fillForm(){
        await this.Name.fill("FirstName LastName");
        await this.Email.fill("Name@email.com")
        await this.Password.fill("Password123!@#");
        await this.Company.fill("Company Inc.");
        await this.Website.fill("Company.co");
        await this.CountryDbox.selectOption({label : "United States"});
        await this.City.fill("Bengaluru");
        await this.Address1.fill("857 Davis Road");
        await this.Address2.fill("Hennur")
        await this.State.fill("Karnataka")
        await this.Zipcode.fill("1234567")

    }

    async clickSubmitBtn(){
        await this.submitBtn.click()
    }

}