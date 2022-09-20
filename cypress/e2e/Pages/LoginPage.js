import { get } from 'http';
import Constans from '../Utils/Constans'

class LoginPage{

    constans = new Constans()
    // locators

    sitelink = "https://discover.ua/";

    loginButton = "a[class=\"login-btn login-ico\"]";
    emailLoginField = "input[id=\"user-email\"]";
    passwordLoginField = "input[id=\"user-passwordlogin\"]";
    doLoginButton = "button[type=\"submit\"]";

    errorAlert = "div[class=\"invalid-feedback\"]"
    // methods

    GoToSite() { cy.visit(this.sitelink); 
        cy.location('protocol').should("eq","https:") 
    }

    PressGoToLoginButton() { cy.get(this.loginButton).should('be.visible').click(); cy.wait(1500) }
    FillingLoginField() { cy.get(this.emailLoginField).type(this.constans.email); cy.wait(1500)}
    FillingPasswordField() { cy.get(this.passwordLoginField).type(this.constans.password); cy.wait(1500)}
    PressLoginButton() { cy.get(this.doLoginButton).click() } 

    DoLogin(){
        this.PressGoToLoginButton()
        this.FillingLoginField()
        this.FillingPasswordField()
        this.PressLoginButton()
    }

    FillingLoginFieldFeild() { cy.get(this.emailLoginField).type(this.constans.password) }
    FillingPasswordFieldFeild() { cy.get(this.passwordLoginField).type(this.constans.email) }
    VerifyErrorAlert() { cy.wait(2500); cy.get(this.errorAlert).should('be.visible') }
}

export default LoginPage