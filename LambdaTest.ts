import * as base from "@playwright/test";
import path from "path";
import { chromium } from "playwright";

// LambdaTest capabilities
const capabilities = {
  browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 11",
    build: "Certification Build - Final",
    name: "Playwright Test",
    user: "katyayanilal1234",
    accessKey: "isyzLksyy9Z69p7U9R7SQaUdHwVCAxeiaSMchPiwehHQJrNmep",
    network: true,
    video: true,
    console: true,
    tunnel: false, // Add tunnel configuration if testing locally hosted webpage
    tunnelName: "", // Optional
    geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
  },
};

// Patching the capabilities dynamically according to the project name.
const modifyCapabilities = (configName, testName) => {
  let config = configName.split("@lambdatest")[0];
  let [browserName, browserVersion, platform] = config.split(":");
  capabilities.browserName = browserName
    ? browserName
    : capabilities.browserName;
  capabilities.browserVersion = browserVersion
    ? browserVersion
    : capabilities.browserVersion;
  capabilities["LT:Options"]["platform"] = platform
    ? platform
    : capabilities["LT:Options"]["platform"];
  capabilities["LT:Options"]["name"] = testName;
};


const test = base.test.extend({
    page: async ({ page, playwright }, use, testInfo) => {
        // Configure LambdaTest platform for cross-browser testing
        let fileName = testInfo.file.split(path.sep).pop();
        if (testInfo.project.name.match(new RegExp(/lambdatest/))) {
        modifyCapabilities(
            testInfo.project.name,
            `${testInfo.title} - ${fileName}`
        );

        const browser = await chromium.connect({
            wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
            JSON.stringify(capabilities)
            )}`,
        });

        const ltPage = await browser.newPage(testInfo.project.use);
        await use(ltPage);

        const testStatus = {
            action: "setTestStatus",
            arguments: {
            status: testInfo.status,
            remark: testInfo.error?.stack || testInfo.error?.message,
            },
        };
        await ltPage.evaluate(() => {},
        `lambdatest_action: ${JSON.stringify(testStatus)}`);
        await ltPage.close();
        await browser.close();
    

    } else {
      // Run tests in local in case of local config provided
      await use(page);
    }
  },

});

export default test
//export const expect = test.expect;


