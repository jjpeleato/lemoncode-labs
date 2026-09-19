describe('project-list scene', () => {
  beforeEach(() => {
    cy.visit('/#/projects');
  });

  it('should show 5 projects on the first page and 3 on the second page', () => {
    // Assert
    cy.get('tbody tr').should('have.length', 5);

    // Act
    cy.get('nav[aria-label="pagination navigation"]')
      .contains('button', '2')
      .click();

    // Assert
    cy.get('tbody tr').should('have.length', 3);
  });

  it('should filter the projects by name when searching', () => {
    // Act
    cy.get('input[placeholder="Buscar proyecto"]').type('baja');

    // Assert
    cy.get('tbody tr').should('have.length', 2);
    cy.get('tbody tr').each((row) => {
      cy.wrap(row).should('contain', 'Baja Médica');
    });
  });

  it('should remove the project when accepting the deletion confirmation', () => {
    // Act
    cy.contains('tbody tr', 'Bankia')
      .find('[aria-label="Delete project"]')
      .click();

    // Assert
    cy.get('[role="dialog"]').should('contain', 'Bankia');

    // Act
    cy.contains('[role="dialog"] button', 'Aceptar').click();

    // Assert
    cy.get('[role="dialog"]').should('not.exist');
    cy.contains('tbody tr', 'Bankia').should('not.exist');
  });

  it('should keep the project when cancelling the deletion confirmation', () => {
    // Act
    cy.contains('tbody tr', 'Bankia')
      .find('[aria-label="Delete project"]')
      .click();
    cy.contains('[role="dialog"] button', 'Cancelar').click();

    // Assert
    cy.get('[role="dialog"]').should('not.exist');
    cy.contains('tbody tr', 'Bankia').should('exist');
  });
});
