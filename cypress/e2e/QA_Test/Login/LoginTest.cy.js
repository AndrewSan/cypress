import Constans from '../../Utils/Constans'
import Activities from '../../Activities/Activities'
describe("LogIn", function(){
    
    const activities = new Activities()
    const constans = new Constans()
    
    it('Sign in', () => {

        activities.getDefoultPage().setExtensionSettings()
        activities.getLoginPage().GoToSite()
        
        activities.getLoginPage().PressGoToLoginButton()
        activities.getLoginPage().FillingLoginField()
        activities.getLoginPage().FillingPasswordField()
        activities.getLoginPage().PressLoginButton()
        activities.getHomePage().verifyGlobalSearchButton()
        activities.getHomePage().verifyDiscoverHomeButton()
    });
})