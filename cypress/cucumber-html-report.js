const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json/",
    reportPath: "reports/cucumber-htmlreport.html",
    openReportInBrowser: true,
    pageTitle: "Bullish QA Assignment",
    reportName: "Bullish QA Assignment",
    pageFooter: "<div><center><p>Created by Arpit Porwal</p></center></div>",
    displayDuration: true,
    displayReportTime: true,
    metadata: {
        browser: {
            name: "chrome",
            version: "101"
        },
        device: "Local test machine",
        platform: {
            name: "mac"
        },
    },
}); 