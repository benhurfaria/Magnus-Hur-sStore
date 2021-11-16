import faker from "faker";

describe('Signup', ()=>{

    const password = faker.internet.password();
    const email = faker.internet.email();
    const name = faker.name.findName();
    
    it('Should signup a different user', ()=>{
        cy.visit('https://magnus-hur-s-store-front.vercel.app/sign-in');
        cy.contains('Primeira vez? Cadastre-se').click();
        cy.url().should('equal', 'https://magnus-hur-s-store-front.vercel.app/sign-up');
        cy.get('input[placeholder=Nome]').type(name);
        cy.get('input[placeholder=E-mail]').type(email);
        cy.get('input[placeholder=Senha]').type(password);
        cy.get('input[placeholder="Confirme a senha"]').type(password);

        cy.request({
            method: 'POST',
            url: 'https://magnusandhurs-back.herokuapp.com/sign-up',
            body:{
                name,
                email,
                password
            }
        })
        cy.wait(5000);
        cy.visit('https://magnus-hur-s-store-front.vercel.app/sign-in');
 
        cy.get('input[placeholder=E-mail]').type(email);
        cy.get('input[placeholder=Senha]').type(password);
        cy.request({
            method: 'POST',
            url: 'https://magnusandhurs-back.herokuapp.com/sign-in',
            body:{
                email,
                password
            }
        })
        cy.visit('https://magnus-hur-s-store-front.vercel.app/home');
    })
});