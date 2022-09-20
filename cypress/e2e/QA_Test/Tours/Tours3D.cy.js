import Constans from '../../Utils/Constans'
import Activities from '../../Activities/Activities'

describe("3DTours",function(){
    const activities = new Activities()
    const constans = new Constans()

    it('Try 3d tour', () => {
        
        activities.getDefoultPage().setExtensionSettings()

        activities.getLoginPage().GoToSite()
        // activities.getLoginPage().DoLogin()

        activities.getTours3DPage().Press3DToursButton()
    });
})