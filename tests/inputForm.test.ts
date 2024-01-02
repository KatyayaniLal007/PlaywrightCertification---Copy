import { expect } from "@playwright/test"
//import { test }  from "../LambdaTest";
import { ftest as test } from "../fixtures/PlaygroundFixture"

test.describe('Input Form', async() => {

    test("Test Scenario 3 - Error message", async ({page, playground, iform}) => {
        await playground.goto();
        await playground.ClickOnModule("Input Form Submit")
        await iform.clickSubmitBtn();
        expect(page.locator(`input[name='name']`)).toHaveAttribute('required');
    });

    test("Test Scenario 3 - Success message", async ({page, playground, iform}) => {
        await playground.goto();
        await playground.ClickOnModule("Input Form Submit")
        await iform.fillForm()
        await iform.clickSubmitBtn()
        await expect (page.getByText("Thanks for contacting us, we will get back to you shortly")).toBeVisible()
    });

});