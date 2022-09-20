import Constans from '../Utils/Constans'

class Tours_3D{
    
    // locators

    tours3dButton = "a[input[contains(@value.3D тури)]]"


    // methods

    Press3DToursButton(){cy.wait(2500); cy.get(this.tours3dButton).should('be.visible').click() }

}
//todo solve this
export default Tours_3D