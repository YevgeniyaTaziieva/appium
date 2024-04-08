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