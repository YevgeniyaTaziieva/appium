class HomeScreen{
    get accessBtn(){
        return $(`//android.widget.TextView[@resource-id="android:id/text1"]`)
    }
    get nodeProvider(){
        return $(`~Accessibility Node Provider`)
    }
    get textView(){
        return $('//android.widget.TextView[@content-desc="Enable TalkBack and Explore-by-touch from accessibility settings. Then touch the colored squares."]')
    }
}

module.exports = new HomeScreen()

class AnnimationScreen{
    get annimationBtn(){
        return $(`//android.widget.TextView[@content-desc="Animation"]`)
    }
    get eventsBtn(){
        return $(`//android.widget.TextView[@content-desc="Events"]`)
    }
    get controlPanel (){
        return $(`//android.widget.LinearLayout[@resource-id="io.appium.android.apis:id/container"]/android.widget.LinearLayout[1]`)
    }
}

module.exports = new AnnimationScreen()