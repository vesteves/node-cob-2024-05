describe('Login Suite', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/admin/auth/login')

    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert')
    })

    cy.get('input[name="email"]').type('teste@teste.com')
    cy.get('input[name="password"]').type('senha')

    cy.get('button').click()

    cy.get('@alert').should('have.been.calledOnceWith', 'Olá mundo!')

    cy.get('#result').should('be.visible')
  })
})