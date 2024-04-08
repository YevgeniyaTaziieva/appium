const HomeScreenElements = require("./HomeScreenElement")

class HomeScreen{
    async openAccessibilityTab(){
        await HomeScreenElements.accessBtn.click()
        await HomeScreenElements.nodeProvider.click()
        await expect(await HomeScreenElements.textView).toBeDisplayed()
    }
}
module.exports = new HomeScreen()