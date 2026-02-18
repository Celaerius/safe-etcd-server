const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  projectId: "awa4ih",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
