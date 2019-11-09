class Calculator{
    constructor(inputFunction){
        this.operation = "";
        this.currentValue = "";
        this.result = NaN;
        this.numberValue1 = NaN;
        this.numberValue2 = NaN;
//        this.outputInput = outputInput;
        this.outputText = "";
        this.outputFunction = inputFunction;
    }

    //function addition
    addFunction(){
        this.result = this.numberValue1 + this.numberValue2;
        this.outputFunction(this.result);
        this.clearAfterOperFunction();
    }

    //function subtraction
    subFunction(){
        this.result = this.numberValue1 - this.numberValue2;
        this.outputFunction(this.result);
        this.clearAfterOperFunction();
    }

    //function multiplication
    mulFunction(){
        this.result = this.numberValue1 * this.numberValue2;
        this.outputFunction(this.result);
        this.clearAfterOperFunction();
    }

    //function division
    divFunction(){
        if(this.numberValue2){
            this.result = this.numberValue1 / this.numberValue2;
            this.outputFunction(this.result);
            this.clearAfterOperFunction();
        }
        else{
            console.error("Division by zero is not possible");
            this.outputFunction("Error");
            alert("Division by zero is not possible");
            this.cleanCalcFunction();
        }
    }

    //function calculator cleaning
    cleanCalcFunction(){
        this.operation = "";
        this.currentValue = "";
        this.result = NaN;
        this.numberValue1 = NaN;
        this.numberValue2 = NaN;
    }

    //function cleaning
    clearFunction(){
        this.operation = "";
        this.result = NaN;
    }

    //function cleaning after operation
    clearAfterOperFunction(){
        this.numberValue1 = this.result;
        this.numberValue2 = NaN;
    }

    //function number formation
    numberFunction(number){
        if(this.currentValue.length == 0 && number == 0 && !this.numberValue1) return;
        this.currentValue += number;
        this.outputText = this.currentValue;
        this.outputFunction(this.outputText);
    }

    //function operator click
    operatorFunction(operator){
        if (isNaN(this.numberValue1))
        {
            this.numberValue1 = +this.currentValue;
            this.numberValue2 = +this.currentValue;
            this.outputText += operator;
        } else{
            this.numberValue2 = +this.currentValue;
            this.outputText += operator;
        }
        if(this.operation){
            this.outputText = this.outputText.slice(0, -1); 
            this.outputText += operator;
        }
        if(this.operation && this.numberValue1 && this.numberValue2)
        {
            this.calcFunction();
        }
        this.operation = operator;
        this.currentValue = "";
    }

    //function calculation
    calcFunction(){
        this.numberValue2 = +this.currentValue;
        if(this.operation){
            switch(this.operation){
                case "+":
                    this.addFunction(this.numberValue1, this.numberValue2);
                    break;
                case "-":
                    this.subFunction(this.numberValue1, this.numberValue2);
                    break;
                case "*":
                    this.mulFunction(this.numberValue1, this.numberValue2);
                    break;
                case "/":
                    this.divFunction(this.numberValue1, this.numberValue2);
                    break;
            }
        }
        else {
            console.error("no click operation");
            return true;
        }
    }
}





//calculator implementation
let numberButtonList = document.getElementsByName("numberButton");
let outputInput = document.getElementsByName("textEnter")[0].value;
let operationButtonList = document.getElementsByName("operationButton");
let equallyButton = document.getElementsByName("equallyButton")[0];

let calc = new Calculator(inputFunction);

addEventOnNumberButton(numberButtonList);
addEventOnOperandButton(operationButtonList);
calculationFunction(equallyButton);

//function subscribing numbered buttons to a click event
function addEventOnNumberButton(numberList){
    if(numberList){
        for (const numberButton of numberList) {
            numberButton.addEventListener("click", () => {calc.numberFunction(numberButton.value);});
        }
    } else{
        console.warn("no buttons with numberButton attribute name");
    }
}

//function subscribing to click events for operand buttons
function addEventOnOperandButton(operandList)
{
    if(operandList){
        for (const operandButton of operandList) {
            operandButton.addEventListener("click", () => {calc.operatorFunction(operandButton.value);});
        }
    } else{
        console.warn("no buttons with operationButton attribute name");
    }
}

//function expression calculation
function calculationFunction(equallyButton){
    if (equallyButton) {
        equallyButton.addEventListener("click", () => {calc.calcFunction();});
    } else{
        console.warn("no button with equallyButton attribute name");
    }
}


function inputFunction(newValue){
    document.getElementsByName("textEnter")[0].value = newValue;
}












