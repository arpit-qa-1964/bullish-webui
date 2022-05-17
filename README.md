# bullish-qaframework

Bullish Frontend Test Source Code

## Framework Structure :
```
.
|-- Cypress
|     |
|     |-- config   // Folder consists an environment details          
|     |       '-- envConfig.json
|     |
|     |-- fixtures (e.g attachments) // Folder consists the test data files
|     |       '-- TestImage.jpeg / Test.txt / test.PNG/ test.json
|     |       '-- formAuthentication.js
|     |
|     |-- integration // Folder consists feature, stepDefinition and validation data files
|     |       |-- common
|     |       |      |-- VisitAndAuthentication.js
|     |       |
|     |       |-- formAuthentication
|     |             |-- loginFunctionality
|     |             |       '--loginFunctionality.js
|     |             |-- loginFunctionality.feature
|     |       |-- validation
|     |             |-- validationMessage.js
|     |
|     |-- pages // Folder consists field objects 
|     |       '-- FormAuthenticationPage.js
|     |       '-- FormAuthenticationPageSelector.js
|     |
|     |-- plugins // File consists of webpack-preprocessor module and will load once the project is opened 
|     |       '-- index.js
|     |
|     |-- support //
|     |       '-- command.js // Consists of the reusable code to be used in our step definition modules
|     |       '-- index.js
|     |
|     |-- videos //
|     |      '-- formAuthentication
|     |             '-- loginFunctionality.feature.mp4
|     |
|     |-- cypress.json  // Cypress configuration file
|     |
|     |-- package-lock.json 
|     |
|     |-- package.json // Contains functional attributes of the project, scripts, dependencies, entry points
|     |
|     |-- README.md          
```
### Folders And Files

- config: This folder contains environment details like url , loading time or authorization credentials
- fixtures: This folder contains test data files \
- integration: This folder Includes both step definition and feature file which sets input data and calls Page’s functions that matches the behavior from features \
- pages: This folder contains object models and calls cypress api’s \
- plugins: This folder contains files that enable you to tap, access, and modify Cypress’s internal working behavior \
- support: This folder is use to put reusable behavior such as custom commands or global overrides that you want to be applied and available  to all your spec files \
- videos: This folder contains videos of test execution \
- screenshots: This folder contains screenshots from failure of our test execution \
- cypress.json: This file is used to pass any configuration values we require \
- package-lock.json: This file traces every package and its version so that the installs are maintained and updated on every npm install globally \
- package.json: It keeps the details of project like name , version , dependencies , description and also keeps libraries , devdependencies and scripts  
- reports: This folder will be created after the execution completes and index.html file will be generated to view the Html reports

### Installation And Execution Steps

- Prerequisites : Nodejs version >=14 must be already installed on the machine

- Execution Steps: 

(i) Clone this repo to a local directory
git clone https://github.com/arpit-qa-1964/bullish-webui.git

(ii) CD into the cloned repo
cd bullish-webui

(iii) Install the node_modules
npm install

(iv) Run the Cypress Test Execution
npm run cypress:run_formauthentication

(v) Generate the test reports from the execution
npm run run_html_report
