import { expect } from "@playwright/test"
import { ftest as test }  from "../fixtures/PlaygroundFixture";

test.describe('Simple Form Demo', async() => {

    test("Test Scenario 1 - Message Check", async ({page, sForm, playground}) => {
        await playground.goto();
        await playground.ClickOnModule("Simple Form Demo");
        await expect(page).toHaveURL(new RegExp(/simple-form-demo/));
        await page.waitForTimeout(3000);
        const message = "Sample Message";
        await sForm.SetSingleInput(message);
        await sForm.ClickGetCheckedValueButton();
        expect(await sForm.getOutputLabel()).toBe(message)

    });

});