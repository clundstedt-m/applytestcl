class signup {
    private genderCheckboxMr: string = "#id_gender1";
    private desiredPassword: string = "#password";
    private daySelector: string = "#days"
    private monthSelector: string = "#months"
    private yearSelector: string = "#years"
    private firstName: string = "#first_name"
    private lastName: string = "#last_name"
    private address1: string = "#address1"
    private country: string = "#country"
    private state: string = "#state"
    private city: string = "#city"
    private zipcode: string = "#zipcode"
    private mobileNumber: string = "#mobile_number"
    private createAccountBtn: string = "button[data-qa='create-account']"

    get genderCheckBoxMrElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.genderCheckboxMr)
    }
    get desiredPasswordElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.desiredPassword)
    }
    get daySelectorElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.daySelector)
    }
    get monthSelectorElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.monthSelector)
    }
    get yearSelectorElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.yearSelector)
    }
    get firstNameElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.firstName)
    }
    get lastNameElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.lastName)
    }
    get address1Element(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.address1)
    }
    get countryElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.country)
    }
    get stateElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.state)
    }
    get cityElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.city)
    }
    get zipcodeElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.zipcode)
    }
    get mobileNumberElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.mobileNumber)
    }
    get createAccountBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.createAccountBtn)
    }
}

export const signupPage = new signup();
