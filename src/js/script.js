class Calculator{
    constructor(inputFunction, outputHistoryFunction){
        this.operation = "";
        this.currentValue = "";
        this.result = NaN;
        this.numberValue1 = NaN;
        this.numberValue2 = NaN;
//        this.outputInput = outputInput;
        this.outputText = "";
        this.outputFunction = inputFunction;

        this.historyText = "";
        this.outputHistoryFunction = outputHistoryFunction;
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
        this.currentValue = "";
    }

    //function number formation
    numberFunction(number){
        if(this.currentValue.length == 0 && number == 0 && !this.numberValue1) return;
        if(this.currentValue == '0' && number == 0) return;
        this.currentValue += number;
        this.outputText = this.currentValue;
        this.outputFunction(this.outputText);

        this.historyText += number;
        this.outputHistoryFunction(this.historyText);

    }

    //function operator click
    operatorFunction(operator){
        switch (operator) {
            case "C":
                {
                    this.cleanCalcFunction();
                    this.outputFunction("");
                    this.historyText = "";
                    this.outputHistoryFunction(this.historyText);
                }
                break;
            case "+/-":
                {
                    if(this.result)
                    {
                        this.result *= -1;
                        this.outputFunction(this.result);  
                    }
                    else{
                        if(this.currentValue.length){
                            this.outputText = this.outputText.slice(0, this.currentValue.length); 
                            this.currentValue = (+this.currentValue * -1).toString();
                            this.outputText = this.currentValue; 
                            this.outputFunction(this.currentValue);  
    
                            this.historyText = this.historyText.slice(0, this.currentValue.length);
                            this.historyText = this.currentValue;
                            this.outputHistoryFunction(this.historyText);
                        }
                    }
                }
                break;
            default:
                {
                    if (isNaN(this.numberValue1))
                    {
                        this.numberValue1 = +this.currentValue;
                        this.numberValue2 = +this.currentValue;
                        this.operation = operator;
                        this.outputText += operator;
                        this.currentValue = "";
                        this.historyText += operator;
                        this.outputHistoryFunction(this.historyText);
                        return;
                    } else{
                        this.numberValue2 = +this.currentValue;
                        this.outputText += operator;

                        let symbol = this.historyText.slice(-1);
                        if (symbol == "+" || symbol == "-" || symbol == "*" || symbol == "/") {
                            this.historyText = this.historyText.slice(0, -1);
                            this.historyText += operator;
                            this.outputHistoryFunction(this.historyText);
                        }
                        else{
                            this.historyText += operator;
                            this.outputHistoryFunction(this.historyText);
                        }
                    }
                    if(this.operation){
                        this.outputText = this.outputText.slice(0, -1); 
                        this.outputText += operator;

                        let symbol = this.historyText.slice(-1);
                        if (symbol == "+" || symbol == "-" || symbol == "*" || symbol == "/") {
                            this.historyText = this.historyText.slice(0, -1); 
                            this.historyText += operator;
                            this.outputHistoryFunction(this.historyText);
                        }
                    }
                    if(this.operation && this.numberValue1 && this.numberValue2)
                    {
                        this.calcFunction(operator);
                    }
                    this.operation = operator;
                    this.currentValue = "";
                }
                break;
        }
    }

    //function calculation
    calcFunction(operetorEqually){
        if(operetorEqually == "="){
            this.historyText = "";
            this.outputHistoryFunction(this.historyText);
        }
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

let calc = new Calculator(inputFunction, outputHistoryFunction);

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
        equallyButton.addEventListener("click", () => {calc.calcFunction(equallyButton.value);});
    } else{
        console.warn("no button with equallyButton attribute name");
    }
}

//function output result
function inputFunction(newValue){
    document.getElementsByName("textEnter")[0].value = newValue;
}

//function output history
function outputHistoryFunction(historyText){
    document.getElementsByClassName("small_text")[0].innerHTML = historyText;
}















