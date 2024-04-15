const HomeScreen = require("../../pom/HomeScreen/HomeScreen")
const AnnimationScreen = require("../../pom/HomeScreen/HomeScreen")

describe('My application', () => {
    it('Should open Accessibility Tab ...', async () => {
        await HomeScreen.openAccessibilityTab()
    })

    it('Check Annimation tab', async () => {
        await AnnimationScreen.openAnnimationTab()
    })
})