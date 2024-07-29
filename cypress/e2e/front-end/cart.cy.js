describe('', () => {
    it('TC-001:FE| Cart | Agregar un producto disponible al carrito', () => {
        cy.visit('http://www.testingyes.com/onlineshop/');
        //expect(true).equals(true)
       cy.get('[data-id-product="3"] > .thumbnail-container > .thumbnail > img').click();
       cy.get('.add > .btn').click();
       cy.get('.btn-secondary').click();
       cy.get('.header > a > .hidden-sm-down').click();
       cy.get('.cart-overview').should('be.visible');
       cy.screenshot();
    })
})