describe('', () => {
    it('TC-004:FE |Filtro por categoría | Filtrar el listado de productos por categoría Arte', () => {
        cy.visit('http://www.testingyes.com/onlineshop/');
        //expect(true).equals(true)
        cy.get('#category-9 > .dropdown-item').click();
        cy.get('#content-wrapper').should('be.visible');
        cy.screenshot();
    })
})