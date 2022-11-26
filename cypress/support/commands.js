describe('Logging In - CSRF Tokens', function () {
    const username = 'testRandom'
    const email = 'randomEmail'
  
    Cypress.Commands.add('loginByCSRF', (csrfToken) => {
      cy.request({
        method: 'POST',
        url: '/login',
        failOnStatusCode: false, 
        form: true, 
        body: {
          username,
          password,
          _csrf: csrfToken, 
        },
      })
    })
    })