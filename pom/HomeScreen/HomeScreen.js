const HomeScreenElements = require("./HomeScreenElement")
const AnnimationScreenElements = require("./HomeScreenElement")


class HomeScreen{
    async openAccessibilityTab(){
        await HomeScreenElements.accessBtn.click()
        await HomeScreenElements.nodeProvider.click()
        await expect(await HomeScreenElements.textView).toBeDisplayed()
    }
}
module.exports = new HomeScreen()

class AnnimationScreen{
    async openAnnimationTab(){
        await AnnimationScreenElements.annimationBtn.click()
        await AnnimationScreenElements.eventsBtn.click()
        await expect(await AnnimationScreenElements.controlPanel).toBeDisplayed()
    }
}
module.exports = new AnnimationScreen()