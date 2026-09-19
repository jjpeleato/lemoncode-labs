describe('login scene', () => {
  beforeEach(() => {
    cy.visit('/#/login');
  });

  it('should redirect to submodule-list when logging in with valid credentials', () => {
    // Arrange & Act
    cy.get('input[name="user"]').type('admin');
    cy.get('input[name="password"]').type('test');
    cy.contains('button', 'Login').click();

    // Assert
    cy.url().should('include', '#/submodule-list');
  });

  it('should show an error message and stay on login when credentials are invalid', () => {
    // Arrange & Act
    cy.get('input[name="user"]').type('wrong-user');
    cy.get('input[name="password"]').type('wrong-password');
    cy.contains('button', 'Login').click();

    // Assert
    cy.contains('Usuario y/o password no válidos').should('be.visible');
    cy.url().should('include', '#/login');
  });
});
