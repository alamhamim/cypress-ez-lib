# CYPRESS-EZ-LIB

cypress-ez-lib pkg is for automation testing 

## Installation

Use the package manager NPM to install cypress-ez-lib.

```bash
npm install cypress-ez-lib
```
```bash
npm install
```

## Usage

```javascript
var driver = require("cypress-ez-lib");

describe("Testing made easy with Cypress-ez-lib", function(){
  it("Testing with Cypress-ez-lib", function(){
    driver.clickById("locator");
    driver.clickByCss("locator");
    driver.typeById("locator", "some text");
    driver.typeByCss("locator", "some text");
    driver.isDisplayed("locator").then(function(displayed){
       if(isDisplayed){
          driver.clickById("locator").click();
       }
    })
  });
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.