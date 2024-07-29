describe('', () => {
    it('TC-005:FE | Filtro por categoría | Filtrar el listado de productos por categoría  Ropa(mujer)', () => {
        cy.visit('http://www.testingyes.com/onlineshop/');

        cy.get('[href="http://www.testingyes.com/onlineshop/3-clothes"]').click();
        cy.get('.category-sub-menu > :nth-child(2) > a').click();
        cy.get('#wrapper > .container').should('be.visible');
        cy.get('.thumbnail > img').click();
        cy.get('#wrapper').should('be.visible');
        cy.screenshot();
    })
})