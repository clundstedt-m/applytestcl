class product {
    private productDetails: string = ".product-details";
    private productQuantity: string = "#quantity";
    private addToCartBtn: string = "button[type='button']"
    private viewCartBtn: string = "p[class='text-center'] a"

    get productDetailsElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productDetails)
    }

    get productQuantityElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.productQuantity)
    }

    get addToCartElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.addToCartBtn)
    }

    get viewCartElement(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.viewCartBtn)
    }
}

export const productPage = new product();
