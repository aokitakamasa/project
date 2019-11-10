export class BackspaceOperation {

    constructor() {
        this.name = 'backspace';
        this.symbol = '⌫';
        this.isValueMutation = true;
        this.keyCodes = ['Backspace'];
    }

    operate(calcData) {
        
        if (calcData.value === null) {
            return calcData;
        }
        if (calcData.value >= 10 || calcData.value <= -10) {
            calcData.value = (calcData.value - (calcData.value % 10)) / 10;
        }
        else {
            calcData.value = 0;
        }

        calcData.valueToDisplay = calcData.value;

        return calcData;
    }
}