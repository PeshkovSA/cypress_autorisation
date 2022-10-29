describe('Autorisation', function (){

    const USER_LOGIN='god';

    it('Autorisation', function () {

        cy.visit('https://platform.betskilla.com/')
        cy.viewport(1920,1080)

        cy.get('#input-Connexion').type(USER_LOGIN)
            .should('have.value',USER_LOGIN)

        cy.get("input[type='password']").type('god')


        cy.get('button[class="sc-evZas gLjLbw MuiButtonBase-root sc-breuTD kIbPdU MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium"]').should('be.visible').click()

        cy.get('button[class="sc-evZas gLjLbw MuiButtonBase-root sc-dIouRR dhumOf MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium"]').should('be.visible').click()

        cy.get('#button_settings').click()


    });
})