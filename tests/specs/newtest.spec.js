const HomeScreen = require("../../pom/HomeScreen/HomeScreen")

describe('My Login application', () => {
    it('Should open Accessibility Tab ...', async () => {
        await HomeScreen.openAccessibilityTab()
    })
})