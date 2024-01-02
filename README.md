# PlaywrightCertification

Execution Steps
- Enter the gitpod link (with the github repo) as a url in a browser, to initiate the environment
gitpod.io/#https://github.com/philInsight/PlaywrightCertification
- User may be requested to create a new workspace in 'Philip's Org' organization. Click continue.
- The necessary dependencies will be installed as per the gitpod yml script (npm, playwright)
- After installation, the execution of tests will also start automatically (npx playwright test)
- On test execution, the Build will appear in the lambdatest automation environment

Testing
- Scenarios are tested in parallel with 3 configurations: 
    - Chrome, Windows 10
    - Microsoft Edge, Windows 10
    - pw-webkit, macOS Big sur

- A test will be retried once if it fails

LambdaTest build - 'Certification Build - Final'

Observation - For test scenario 3, error message 'Please fill in the field' is not attached to the DOM.

Test - IDS
Windows 11 - Chrome
Test Scenario 1 - Message Check - simpleForm.test.ts
RVVCM-UYWNT-EM5IG-WQRKJ

Test Scenario 2 - Sliders - sliders.test.ts
VBKYB-XG61X-AJLTA-BU5WG

Test Scenario 3 - Error message - inputForm.test.ts
RTAVY-3H4BD-QXTYJ-IGQWB
ONNUI-D4NAX-CNN9V-S5HPA

Test Scenario 3 - Success message - inputForm.test.ts
DW2RU-WRKHQ-2YOYS-5VMDY
VU3AM-DUBBV-NYV4H-CREDR

pw-Webkit
Test Scenario 1 - Message Check - simpleForm.test.ts
OSTJU-LPMNO-68YLX-XBCYM

Test Scenario 2 - Sliders - sliders.test.ts
NQ0AB-BIUGD-HFQEE-XUHHV

Test Scenario 3 - Error message - inputForm.test.ts
14UNL-TMNZW-6NTJN-QJMW5
KIHFD-NZAAP-GX97T-MLLSY

Test Scenario 3 - Success message - inputForm.test.ts
JXAV1-PESJC-UAYHE-RI1HF

Windows 10 - Edge
Test Scenario 1 - Message Check - simpleForm.test.ts
7MY8P-D0JRB-PUTXD-YBRSJ

Test Scenario 2 - Sliders - sliders.test.ts
GRTWO-PGY3H-GWG2U-NI5BB
LGZQC-IXSRC-GE15W-HRLTW

Test Scenario 3 - Error message - inputForm.test.ts
BVUUO-QY5XN-C2GBV-PSKOU
HLUVA-5CMVS-PGJAR-PBGSH

Test Scenario 3 - Success message - inputForm.test.ts
DZAJE-25NUV-N7OAY-6MAD9