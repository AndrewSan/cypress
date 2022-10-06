import Constans from '../Utils/Constans'

class Tours_3D{
    
    // locators

    globalSearchOptions = "(//div[class=\"show-popup-filter\"])[2]"


    // methods

    Press3DToursButton(){cy.wait(2500); cy.get(this.tours3dButton).should('be.visible').click() }

}
//todo solve this
export default Tours_3D