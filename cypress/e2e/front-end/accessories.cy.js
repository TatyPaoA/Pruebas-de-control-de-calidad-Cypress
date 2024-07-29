describe('', () => {
    it('TC-003:FE | Filtro por categoría | Filtrar el listado de productos por categoría Home Accessories', () => {
        cy.visit('http://www.testingyes.com/onlineshop/');
        //expect(true).equals(true)
       cy.get('[href="http://www.testingyes.com/onlineshop/6-accessories"]').click();
       cy.get('#wrapper').should('be.visible');
       cy.screenshot();
    })
})