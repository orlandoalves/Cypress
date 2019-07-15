// / <reference types="Cypress" />

describe('Fuel Savings page test', () => {
    beforeEach(() => {
        cy.server();       
        cy.visit('http://localhost:3000/fuel-savings');

    });

    // GIVEN
    //         I’m on the fuel savings screen
    //     WHEN
    //         I fill data that new vehicle gets more MPG 
    //     THEN
    //        the results should be Savings.
    it('Scenario 1 ', () => {
        
        cy.url().should('include', '/fuel-savings');
        cy.get('h2').contains('Fuel Savings Analysis');
        cy.get(':nth-child(1) > :nth-child(1) > label').contains('New Vehicle MPG');
        cy.get(':nth-child(1) > :nth-child(2) > .small').type(50);
        cy.get(':nth-child(2) > :nth-child(1) > label').contains('Trade-in MPG');
        cy.get(':nth-child(2) > :nth-child(2) > .small').type(45);
        cy.get(':nth-child(3) > :nth-child(1) > label').contains('New Vehicle price per gallon');
        cy.get(':nth-child(3) > :nth-child(2) > .small').type(5);
        cy.get(':nth-child(4) > :nth-child(1) > label').contains('Trade-in price per gallon');
        cy.get(':nth-child(4) > :nth-child(2) > .small').type(6);
        cy.get(':nth-child(5) > :nth-child(1) > label').contains('Miles Driven');
        cy.get(':nth-child(5) > :nth-child(2) > .small').type(100);
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(1) > :nth-child(1)').contains('Monthly');
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(1) > :nth-child(2)').contains('1 Year');
        cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('3 Year');

    });

    // GIVEN
    //         I’m on the fuel savings screen
    //     WHEN
    //         I fill data that new vehicle gets more MPG per week, month and year.
    //     THEN
    //         the results should be Savings per week, month and year.

    it('Scenario 2 ', () => {
        
        cy.url().should('include', '/fuel-savings');
        cy.get('h2').contains('Fuel Savings Analysis');
        cy.get(':nth-child(1) > :nth-child(1) > label').contains('New Vehicle MPG');
        cy.get(':nth-child(1) > :nth-child(2) > .small').type(50);
        cy.get(':nth-child(2) > :nth-child(1) > label').contains('Trade-in MPG');
        cy.get(':nth-child(2) > :nth-child(2) > .small').type(45);
        cy.get(':nth-child(3) > :nth-child(1) > label').contains('New Vehicle price per gallon');
        cy.get(':nth-child(3) > :nth-child(2) > .small').type(5);
        cy.get(':nth-child(4) > :nth-child(1) > label').contains('Trade-in price per gallon');
        cy.get(':nth-child(4) > :nth-child(2) > .small').type(6);
        cy.get(':nth-child(5) > :nth-child(1) > label').contains('Miles Driven');
        cy.get(':nth-child(5) > :nth-child(2) > .small').type(100);
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(1) > :nth-child(1)').contains('Monthly');
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(1) > :nth-child(2)').contains('1 Year');
        cy.get('tbody > :nth-child(1) > :nth-child(3)').contains('3 Year');
        cy.get('select').select('Month');
        cy.get('select').select('Year');

    });

    
    // GIVEN
    //         I’m on the fuel savings screen
    //     WHEN
    //         I fill with zero values for all inputs.
    //     THEN
    //         nothing  will be displayed on Savings.

    it('Scenario 3 ', () => {

        cy.url().should('include', '/fuel-savings');
        cy.get('h2').contains('Fuel Savings Analysis');
        cy.get(':nth-child(1) > :nth-child(1) > label').contains('New Vehicle MPG');
        cy.get(':nth-child(1) > :nth-child(2) > .small').type(0);
        cy.get(':nth-child(2) > :nth-child(1) > label').contains('Trade-in MPG');
        cy.get(':nth-child(2) > :nth-child(2) > .small').type(0);
        cy.get(':nth-child(3) > :nth-child(1) > label').contains('New Vehicle price per gallon');
        cy.get(':nth-child(3) > :nth-child(2) > .small').type(0);
        cy.get(':nth-child(4) > :nth-child(1) > label').contains('Trade-in price per gallon');
        cy.get(':nth-child(4) > :nth-child(2) > .small').type(0);
        cy.get(':nth-child(5) > :nth-child(1) > label').contains('Miles Driven');
        cy.get(':nth-child(5) > :nth-child(2) > .small').type(0);
       

    });

    // GIVEN
    //         I’m on the fuel savings screen
    //     WHEN
    //         I fill with all values with same number for all inputs.
    //     THEN
    //         All savings will be displayed with Zero.

    it('Scenario 4 ', () => {

        cy.url().should('include', '/fuel-savings');
        cy.get('h2').contains('Fuel Savings Analysis');
        cy.get(':nth-child(1) > :nth-child(1) > label').contains('New Vehicle MPG');
        cy.get(':nth-child(1) > :nth-child(2) > .small').type(1);
        cy.get(':nth-child(2) > :nth-child(1) > label').contains('Trade-in MPG');
        cy.get(':nth-child(2) > :nth-child(2) > .small').type(1);
        cy.get(':nth-child(3) > :nth-child(1) > label').contains('New Vehicle price per gallon');
        cy.get(':nth-child(3) > :nth-child(2) > .small').type(1);
        cy.get(':nth-child(4) > :nth-child(1) > label').contains('Trade-in price per gallon');
        cy.get(':nth-child(4) > :nth-child(2) > .small').type(1);
        cy.get(':nth-child(5) > :nth-child(1) > label').contains('Miles Driven');
        cy.get(':nth-child(5) > :nth-child(2) > .small').type(1);
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(2) > :nth-child(1)').eq(0);
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(2) > :nth-child(2)').eq(0);
        cy.get('tbody > :nth-child(2) > :nth-child(3)').eq(0);
       
    });

     // GIVEN
    //         I’m on the fuel savings screen
    //     WHEN
    //         I fill Trade-in MPG with value more than new vehicle.
    //     THEN
    //         All loss will be displayed.

    it('Scenario 5 ', () => {

        cy.url().should('include', '/fuel-savings');
        cy.get('h2').contains('Fuel Savings Analysis');
        cy.get(':nth-child(1) > :nth-child(1) > label').contains('New Vehicle MPG');
        cy.get(':nth-child(1) > :nth-child(2) > .small').type(40);
        cy.get(':nth-child(2) > :nth-child(1) > label').contains('Trade-in MPG');
        cy.get(':nth-child(2) > :nth-child(2) > .small').type(50);
        cy.get(':nth-child(3) > :nth-child(1) > label').contains('New Vehicle price per gallon');
        cy.get(':nth-child(3) > :nth-child(2) > .small').type(1);
        cy.get(':nth-child(4) > :nth-child(1) > label').contains('Trade-in price per gallon');
        cy.get(':nth-child(4) > :nth-child(2) > .small').type(1);
        cy.get(':nth-child(5) > :nth-child(1) > label').contains('Miles Driven');
        cy.get(':nth-child(5) > :nth-child(2) > .small').type(100);
        cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(2) > :nth-child(1)').eq(0);
        cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > :nth-child(2) > table > tbody > :nth-child(2) > :nth-child(2)').eq(0);
        cy.get('tbody > :nth-child(2) > :nth-child(3)').eq(0);
        cy.get('.fuel-savings-label').contains('Loss');
       
    });


});

    

