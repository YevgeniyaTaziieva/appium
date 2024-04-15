describe('Application', () => {
    it('open Animation Tab', async () => {
        const annimationBtn = $(`//android.widget.TextView[@content-desc="Animation"]`);
        const eventsBtn = $(`//android.widget.TextView[@content-desc="Events"]`);
        const controlPanel = $(`//android.widget.LinearLayout[@resource-id="io.appium.android.apis:id/container"]/android.widget.LinearLayout[1]`);

        await annimationBtn.click();
        await eventsBtn.click();
        await expect(controlPanel).toBeDisplayed();
    });
});
