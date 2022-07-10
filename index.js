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

    this.getTextById = function(ele){
        return cy.get("#"+ele).invoke("text");
    }

    this.getTextByCss = function(ele){
        return cy.get(ele).invoke("text");
    }
    this.verifyText = function(text1, text2){
        expect(text1).eq(text2);
    }
    this.clickButtonByText = function(givenText){
        cy.get("button").each(function($ele){
            if ($ele.text() === givenText) {
                cy.log(givenText+"<<<<< FOUND REEEEEEEEEEEEEEEEE SOON WILL CLICK!!!!")
                cy.wait(1000);
                cy.wrap($ele).should("be.visible").then(function(visible){
                    if (visible) {
                        cy.wrap($ele).click();
                    } else {
                        cy.log("ELEMENT NOT VISIBLE");
                    }
                });
            } else {
                throw new Error("CLICKING BUTTON FAILD REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
            }
        })
    }
    
}
module.exports = new cypressEzLib();