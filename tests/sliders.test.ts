import { expect } from "@playwright/test"
import { ftest as test } from "../fixtures/PlaygroundFixture"


test.describe('Drag & Drop Sliders', async() => {

        test("Test Scenario 2 - Sliders", async ({page, slider, playground}) => {
            await playground.goto();
            await playground.ClickOnModule("Drag & Drop Sliders");
            await page.waitForTimeout(1000);
            await slider.setSlider15('95');
            await page.waitForTimeout(2000);
            expect(await page.locator('#rangeSuccess').innerText()).toBe('95');
        });

});