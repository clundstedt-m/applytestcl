class checkout {
    private commentsBox: string = "textarea[name='message']";
    private proceedToCheckoutBtn: string = ".btn.btn-default.check_out"
    private nameOnCard: string = "input[name='name_on_card']";
    private cardNumber: string = "input[name='card_number']";
    private cvvNumber: string = "input[placeholder='ex. 311']";
    private expiracyMonthOnCard: string = "input[placeholder='MM']";
    private expiracyYearOnCard: string = "input[placeholder='YYYY']";
    private payBtn: string = "#submit";

    get commentsBoxElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.commentsBox)
    }
    get proceedToCheckoutBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.proceedToCheckoutBtn)
    }
    get nameOnCardElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.nameOnCard)
    }
    get cardNumberElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cardNumber)
    }
    get cvvNumberElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.cvvNumber)
    }
    get expiracyMonthCardElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.expiracyMonthOnCard)
    }
    get expiracyYearCardElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.expiracyYearOnCard)
    }
    get payBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.payBtn)
    }
}

export const checkoutPage = new checkout();
