import { homePage } from "../../cypress/pages/homePage"
import { cartPage } from "../pages/cartPage"
import { checkoutPage } from "../pages/checkoutPage"
import { loginPage } from "../pages/loginPage"
import { productPage } from "../pages/productPage"
import { signupPage } from "../pages/signUpPage"

describe("E2E User Flow", () => {
    before(() => {
        cy.clearCookies()
        cy.visit("baseUrl")
    })
    it("Validate that you are on the Home Page through Title", () => {
        cy.title().then((title) => {
            cy.log(title)
            expect(title).to.be.equal("Automation Exercise")
        })
    })
    it("Select a product from the Home Page", () => {
        homePage.productSelectorElement
            .click()
        productPage.productDetailsElement
            .click()
    })

    it("Change the quantity of the product to 30", () => {
        productPage.productQuantityElement
            .clear()
            .type("30")
    })

    it("Add the product to the Cart", () => {
        productPage.addToCartElement
            .click()
    })
    it("Navigate to your Cart to validate that the product was added and the quantity is correct", () => {
        productPage.viewCartElement
            .click()
            .then($quantity => {
                    if($quantity.is(':visible')) {
                        cartPage.productQtyInCartElement.contains('30')
                    }
                }
            )
    })

    it("Proceed to checkout and click on the Register button", () => {
        cartPage.checkOutBtnElement.click()
        cartPage.loginFromCartElement.click()
    })

    it("Fill the User Signup required info", () => {
        const randomId = () => Cypress._.random(0, 1e6)
        const id = randomId()
        const randomUser = `randomUser${id}`
        const randomEmail = `${id}@testmail.com`
    cy.request('/login')
        loginPage.signUpUsernameElement.type(randomUser)
        loginPage.signUpEmailElement.type(randomEmail)
        loginPage.signUpBtnElement.click()
        signupPage.genderCheckBoxMrElement.click()
        signupPage.desiredPasswordElement.type("passwordmuysegura123")
        signupPage.daySelectorElement.select("1")
        signupPage.monthSelectorElement.select("January")
        signupPage.yearSelectorElement.select("1989")
        signupPage.firstNameElement.type("Hola")
        signupPage.lastNameElement.type("Que")
        signupPage.address1Element.type("Tal")
        signupPage.countryElement.select("United States")
        signupPage.stateElement.type("Connecticout")
        signupPage.cityElement.type("Whatever")
        signupPage.zipcodeElement.type("2000323")
        signupPage.mobileNumberElement.type("56999999999")
        signupPage.createAccountBtnElement
            .click()
            .then($success_message => {
                if($success_message.is(':visible')) {
                    cy.get(".btn.btn-primary").contains("Continue").click({force:true})
                }
            })
    })
    it("Visit cart once again, add comments and place order", () => {
        cy.visit("/view_cart")
        cartPage.checkOutBtnElement.click()
        checkoutPage.commentsBoxElement.scrollIntoView().type("Some comments yara yara yara")
        checkoutPage.proceedToCheckoutBtnElement.click()
        checkoutPage.nameOnCardElement.type("NombreEnTarjeta")
        checkoutPage.cardNumberElement.type("1111222233334444")
        checkoutPage.cvvNumberElement.type("123")
        checkoutPage.expiracyMonthCardElement.type("02")
        checkoutPage.expiracyYearCardElement.type("2039")
        checkoutPage.payBtnElement.click()
    })
    it("Logout/Signout from page and scroll to the bottom of the page afterwards", () => {
        homePage.signOutBtnElement.click()
        cy.scrollTo("bottom")
    })

})