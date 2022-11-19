const { Builder, Browser, By, Key, until } = require("selenium-webdriver")

describe("App integration testing", function () {
  this.timeout(1000000)

  it("should open Google page", async function () {
    let driver = await new Builder().forBrowser(Browser.CHROME).build()
    try {
      await driver.get("https://www.google.com/ncr")
      await driver.wait(until.titleIs("Google"), 1000)
    } finally {
      await driver.quit()
    }
  })




})

