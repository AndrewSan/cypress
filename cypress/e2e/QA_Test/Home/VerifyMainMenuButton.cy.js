import Activities from "../../Activities/Activities";

describe("MainMenu", function(){
    const activities = new Activities()

    it('Verify Buttons', () => {
        
        activities.getDefoultPage().setExtensionSettings()
        activities.getLoginPage().GoToSite()
        activities.getLoginPage().DoLogin()

        activities.getHomePage().verifyChooseLanguageButton()
        activities.getHomePage().verifyMyTripButton()
        activities.getHomePage().verifyUserButton()
        activities.getHomePage().verifyDiscoverHomeButton()
        activities.getHomePage().verifyGlobalSearchButton()
        activities.getHomePage().verifyGlobalSearchField()
    });
})