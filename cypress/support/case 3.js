Cypress.Commands.add ("loggin", (email, password) =>{  

        cy.contains("Category").should("be.visible")
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.contains("Login to your account").should("be.visible")
        cy.get('[data-qa="login-email"]').type(email)
        cy.get('[data-qa="login-password"]').type(password)
        cy.get('[data-qa="login-button"]').click()
        cy.contains("Your email or password is incorrect!").should("be.visible") 
})