it("TC-002: BE |validar inicio de sesión", () => {
    cy.request("POST", "http://www.testingyes.com/onlineshop/login?back=my-account" 

).then((response) => {
        expect(response.status).to.eq(200);
        
    });
});