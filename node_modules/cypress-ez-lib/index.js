/// <reference types="cypress" />
var cypressEzLib = function(){

    this.clickById = function(id){
        cy.get("#"+id).click();
    }
    this.clickByCss = function(css){
        cy.get(css).click();
    }

    this.isDisplayed = function(ele){
        return cy.get(ele).should("be.visible");
    }
    this.typeById = function(ele, text){
        cy.get("#"+ele).clear().type(text);
    }
    this.typeByCss = function(ele, text){
        cy.get(ele).clear().type(text);
    }
}
module.exports = new cypressEzLib();