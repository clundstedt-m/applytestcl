const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    experimentalSessionAndOrigin: true,
    testIsolation: "off",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
