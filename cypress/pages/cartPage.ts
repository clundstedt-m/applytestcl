class cart {
    private productQtyInCart: string = ".disabled";
    private checkOutBtn: string = ".btn.btn-default.check_out"
    private loginFromCart: string = 'div[class="modal-body"] a'

    get productQtyInCartElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productQtyInCart)
    }

    get checkOutBtnElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.checkOutBtn)
    }

    get loginFromCartElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.loginFromCart)
    }
}

export const cartPage = new cart();
