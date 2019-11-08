let result = NaN;
let numberValue1 = NaN;
let numberValue2 = NaN;
let resultString = "";
let currentValue = "";
let operation = "";
let textInput = document.getElementsByName("textEnter")[0];
let textResulteLine = document.getElementsByClassName("small_text")[0];

//function for button
function buttonClick(value){
    // resultString += `${value}`;
    // textResulteLine.innerHTML = resultString;

    if(!isNaN(value)){
        currentValue += value;
        textInput.value = currentValue;
    } else{
        if(value == '+/-'){
            currentValue  = -1 * +currentValue;
            textInput.value = currentValue;
        }
        (isNaN(numberValue1)) ? numberValue1 = +currentValue : numberValue2 = +currentValue;
        if(value == 'C'){
            result = NaN;
            textInput.value = "";
            numberValue1 = result;
            currentValue = "";
            operation = "";
            numberValue2 = NaN;
            resultString = "";
            textResulteLine.innerHTML = resultString;
        }else if(value != '='){
            operation = value == "+/-" ? "": value;
            textInput.value = (currentValue) ? currentValue : numberValue1;

            resultString += `${currentValue}  ${operation}`;
            textResulteLine.innerHTML = resultString;
            currentValue = "";
        } else {
                switch(operation){
                case "+":
                    result = numberValue1 + numberValue2;
                break;
                case "-":
                    result  = numberValue1 - numberValue2;
                break;
                case "*":
                    result  = numberValue1 * numberValue2;
                break;
                case "/":
                    {
                        if(numberValue2 === 0)
                        {   
                            alert("Division by zero");
                            console.error("Division by zero");
                            operation = "";
                            result = numberValue1;
                        }
                        else{
                            result  = numberValue1 / numberValue2;
                        }
                    }
                break;
            }
            resultString += `${numberValue2} =`;
            textResulteLine.innerHTML = resultString;
            
            numberValue1 = result;
            resultString = result
            textInput.value = result;
            currentValue = "";
            operation = "";
            numberValue2 = NaN;
            
        }
    }
};

