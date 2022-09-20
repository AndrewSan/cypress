import Actions from "../Actions/Actions"
class HomePage{

    actions = new Actions
    //locators
    discoverHomeButton = "div[class=\"logo-du\"]"
    userButton = "div[class=\"user-ava\"]"
    searchButton = "div[class=\"show-search search-desctop\"]"
    myTripButton = "span[class=\"my-trip-title\"]"
    chooseLanguageButton = "div[class=\"lang-switcher\"]"
    globalSearchButton = "button[onclick=\"$('#search').submit();\"]"
    globalSearchField = "input[name=\"typeheadRegion\"]"

    allDestinations = "//*[contains(text(),\"Всі напрямки\")]"
    regionConteinerBox1 = "(//div[@class=\"region-container\"])[1]"
    regionConteinerBox2 = "(//div[@class=\"region-container\"])[2]"
    regionConteinerBox3 = "(//div[@class=\"region-container\"])[3]"

    //methods
    clickUserButton(){ cy.get(this.userButton).should('be.visible').click() }
    verifyUserButton(){ cy.get(this.userButton).should('be.visible') }

    clickSearchButton(){ cy.get(this.searchButton).should('be.visible').click() }
    verifySearchButton(){ cy.get(this.searchButton).should('be.visible') }

    clickMyTripButton(){ cy.get(this.myTripButton).should('be.visible').click() }
    verifyMyTripButton(){ cy.get(this.myTripButton).should('be.visible') }

    clickChooseLanguageButton(){ cy.get(this.chooseLanguageButton).should('be.visible').click() }
    verifyChooseLanguageButton(){ cy.get(this.chooseLanguageButton).should('be.visible') }

    clickDiscoverHomeButton(){ cy.get(this.discoverHomeButton).should('be.visible').click() }
    verifyDiscoverHomeButton(){ cy.get(this.discoverHomeButton).should('be.visible') }

    clickGlobalSearchButton(){ cy.get(this.globalSearchButton).should('be.visible').click() }
    verifyGlobalSearchButton(){ cy.get(this.globalSearchButton).should('be.visible') }

    clickGlobalSearchField(){ cy.get(this.globalSearchField).should('be.visible').click() }
    verifyGlobalSearchField(){ cy.get(this.globalSearchField).should('be.visible') }

    clickAllDestinations(){ 
        cy.wait(2500)
        this.actions.getScroll().ScrollToElementVisible(this.allDestinations)
        // this.actions.getScroll().ScrollToElementVisible("Всі напрямки")
        // cy.get(this.allDestinations).scrollIntoView().should('be.visible').click() 
    }
    verifyRegionConteinerBox1(){ cy.get(this.regionConteinerBox1).should('be.visible') }
    verifyRegionConteinerBox2(){ cy.get(this.regionConteinerBox2).should('be.visible') }
    verifyRegionConteinerBox3(){ cy.get(this.regionConteinerBox3).should('be.visible') }

}
export default HomePage