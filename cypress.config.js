const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    baseUrl: "https://duckduckgo.com",
    experimentalOriginDependencies:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        showError(){
        console.log('ERROR')
        }
      })

    },
  },
});
