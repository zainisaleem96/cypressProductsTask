const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return{
      baseUrl: "https://shoparbi.000webhostapp.com/",
          specPattern:"cypress/e2e/testcase/**/*.cy.ts",
          chromeWebSecurity: false,
          screenshotsFolder: "cypress/screenshots",
          videosFolder: "cypress/videos",
          defaultCommandTimeout: 10000
      }
    },
  },
});

