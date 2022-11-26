class home {
    private productSelector: string = "a[href='/product_details/1']";
    private signOutBtn: string = "a[href='/logout']";
    private loginBtn: string = "a[href='/login']";

    get productSelectorElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productSelector)
    }
    get loginBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginBtn)
    }
    get signOutBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.signOutBtn)
    }
}

export const homePage = new home();
