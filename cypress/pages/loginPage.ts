class login {
    private signUpUsername: string = "input[placeholder='Name']";
    private signUpEmail: string = "input[data-qa='signup-email']"
    private signUpBtn: string = "button[data-qa='signup-button']"

    get signUpUsernameElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.signUpUsername)
    }

    get signUpEmailElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.signUpEmail)
    }

    get signUpBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.signUpBtn)
    }
}

export const loginPage = new login();
