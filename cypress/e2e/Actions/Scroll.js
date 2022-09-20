import { Console } from "console"

class Scroll{

    ScrollToElementVisible(element){
        // cy.contains(element).scrollIn
        do{
            cy.scrollTo(0, 200)
            try{
                cy.get(element).should('be.visible')
            }
            catch{}
        }while(true)
    }

}
export default Scroll