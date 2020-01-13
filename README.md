# cypress_metaweather

 Technical challenge to test the Metaweather API using cypress.io

## Execution instructions

### Clone Rep to run locally

Change into your "dev" or working directory and use git to clone the repo locally.

```powershell
cd c:\dev
git clone https://github.com/dowenb/cypress_metaweather.git
```

### NPM Install

Before you can execute the tests locally you must install the required modules, in this case Cypress.

Open a terminal window, such as PowerShell in Windows, change directory into the repo and run an NPM install, for example:

```powershell
cd c:\dev\cypress_metaweather
npm install
```

### NPM Test

Now you can execute the test suite in two ways.

#### 1) Cypress GUI

You can do this by running the following command:

```powershell
npx cypress open
```

You and then using the GUI to run the tests.

#### 2) Cypress CLI

Alternitivly, you can execute the tests using the CLI. To do this you can change into the appropriate directory and run either:

```powershell
cd c:\dev\cypress_metaweather
npm test
or
cypress run
```

### Running in CI

For more infomation about running Cypress in a CI system, see the documentation: <https://docs.cypress.io/guides/guides/continuous-integration.html>

## Fixtures

The weather_fixtures.spec.js runs tests using locations and data stored in json format.
