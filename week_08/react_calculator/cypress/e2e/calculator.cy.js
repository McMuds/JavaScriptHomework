describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })
    
  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  
  it('should have working number buttons that update the display', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#number2').click();
    cy.get('.display').should('contain', '22')
    cy.get('#number3').click();
    cy.get('.display').should('contain', '223')
    cy.get('#number4').click();
    cy.get('.display').should('contain', '2234')
    cy.get('#number1').click();
    cy.get('.display').should('contain', '22341')
  })
  
  it('should be able to do calculations', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '2')
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })
  
  it('should be able to do chained calculations', () => {
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '3')
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
    cy.get('#operator-subtract').click()
    cy.get('.display').should('contain', '4')
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2')
  })
  
  it('should handle positive values', () => {
    cy.get('#number7').click()
    cy.get('.display').should('contain','7')
    cy.get('#operator-subtract').click()
    cy.get('.display').should('contain', '7')
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })
  
  it('should handle negative values', () => {
    cy.get('#number2').click()
    cy.get('.display').should('contain','2')
    cy.get('#operator-subtract').click()
    cy.get('.display').should('contain', '2')
    cy.get('#number7').click();
    cy.get('.display').should('contain', '7')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-5')
  })
  
  it('should handle decimal values', () => {
    cy.get('#number5').click()
    cy.get('.display').should('contain','5')
    cy.get('#operator-divide').click()
    cy.get('.display').should('contain', '5')
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5')
  })  
  
  it('should handle divide by infinity', () => {
    cy.get('#number5').click()
    cy.get('.display').should('contain','5')
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('.display').should('contain', '0')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error')
  })
  
})