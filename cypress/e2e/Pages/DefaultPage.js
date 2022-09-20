import Constans from "../Utils/Constans"

class DefaultPage{

    constans = new Constans()
        
    setExtensionSettings(){ cy.viewport(this.constans.widht, this.constans.height) } 
}
export default DefaultPage