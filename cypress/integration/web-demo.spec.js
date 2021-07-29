describe('Web Demo', function() {
  it('shows a lovely greeting', function() {
    cy.visit('/')
    cy.contains("Hi, welcome to Battle!")
    cy.contains("What are your names?")
  })

  describe('player 1', function() {
    beforeEach(function() {
      cy.visit('/')
      cy.get('#player1-name-textbox').type('Siri')
      cy.get('#player2-name-textbox').type('Alexa')
      cy.get('#names-submit').click()
    })

    it('submitting names starts the game for player 1', function() {
      cy.contains("Current Player: Siri!")
      cy.contains("Your health is 100!")
      cy.url().should('include', '/game')
    })

    it('can attack player 2 and see a message', function() {
      cy.get("#attack-button").click()
      cy.contains("Siri (100) attacked Alexa (90)")
      cy.url().should('include', '/turn')
    })

    describe('player 2', function() {
      beforeEach(function() {
        cy.get("#attack-button").click()
        cy.get("#turn-link").click()
      })

      it("returns the game to player 2", function() {
        cy.contains("Current Player: Alexa!")
        cy.contains("Your health is 90!")
        cy.url().should('include', '/game')
      })

      it("Attacks player 1 and see a message", function() {
        cy.get("#attack-button").click()
        cy.contains("Alexa (90) attacked Siri (90)")
        cy.url().should('include', '/turn')
      })
    })
  })
})
