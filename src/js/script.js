class Calculator{
    constructor(){
        this.operation = "";
        this.currentValue = "";
        this.result = NaN;
        this.numberValue1 = NaN;
        this.numberValue2 = NaN;
    }

    //function addition
    addFunction(number1, number2){
        this.result = number1 + number2;
        this.clearFunction();
    }

    //function subtraction
    subFunction(number1, number2){
        this.result = number1 - number2;
        this.clearFunction();
    }

    //function multiplication
    mulFunction(number1, number2){
        this.result = number1 * number2;
        this.clearFunction();
    }

    //function division
    divFunction(number1, number2){
        if(!number2){
            this.result = number1 / number2;
            this.clearFunction();
        }
        else{
            console.error("Division by zero is not possible");
            this.clearFunction();
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
        this.result = NaN;
        this.numberValue2 = NaN;
    }

    //function number formation
    numberFunction(number){
        if(this.currentValue.length == 0 && number == 0) return;
        this.currentValue += number;
    }

    //function operator click
    operatorFunction(operator){
        this.operation = operator;
        if (isNaN(this.numberValue1))
        {
            this.numberValue1 = +this.currentValue;
            this.numberValue2 = +this.currentValue;
        } else{
            this.numberValue2 = +this.currentValue;
        }
        this.currentValue = "";
    }

    //function calculation
    calcFunction(){
        if(operation){
            switch(operation){
                case "+":
                    addFunction(this.numberValue1, this.numberValue2);
                    break;
                case "-":
                    addFunction(this.numberValue1, this.numberValue2);
                    break;
                case "*":
                    addFunction(this.numberValue1, this.numberValue2);
                    break;
                case "/":
                    addFunction(this.numberValue1, this.numberValue2);
                    break;
            }
        }
    }
}

//calculator implementation
let calc = new Calculator();


