import Constans from '../../Utils/Constans'
import Activities from '../../Activities/Activities'

describe("UncorrectLogIn", function(){
    
    const constans = new Constans()
    const activities = new Activities()
    
    it('Sign in', () => {


        activities.getDefoultPage().setExtensionSettings()

        activities.getLoginPage().GoToSite()
        
        activities.getLoginPage().PressGoToLoginButton()
        activities.getLoginPage().FillingLoginFieldFeild()
        activities.getLoginPage().FillingPasswordFieldFeild()
        activities.getLoginPage().PressLoginButton()

        activities.getLoginPage().VerifyErrorAlert()
    });
})