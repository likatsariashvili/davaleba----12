describe("fixture", () => {

  it("Test Case 1: Register User", () => {
    cy.visit('https://automationexercise.com/');
    cy.fixture("case 1").then((userdata) => {
      cy.login(userdata.name, userdata.email, userdata.password, userdata.days, userdata.months, userdata.years,
        userdata.first_name, userdata.last_name, userdata.company, userdata.address, userdata.address2,
        userdata.country, userdata.state, userdata.city, userdata.zipcode, userdata.mobile_number);
      })

      
    })
  })

