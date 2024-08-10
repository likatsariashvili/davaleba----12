Cypress.Commands.add ("log", (email, password) =>{  
    cy.contains("Category").should("be.visible")
    //4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    //5. Verify 'Login to your account' is visible
    cy.contains("Login to your account").should("be.visible")
    //6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(password)
    //7. Click 'login' button
    cy.get('[data-qa="login-button"]').click()
    //8. Verify that 'Logged in as username' is visible
    cy.contains("Logged in as lika").should("be.visible")
    //9. Click 'Delete Account' button
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    //10. Verify that 'ACCOUNT DELETED!' is visible
    cy.contains("ACCOUNT DELETED!").should("be.visible") 
})