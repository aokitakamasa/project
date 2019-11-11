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
        
        calcData.value = calcData.value.toString();
        calcData.value = calcData.value.slice(0, -1);
        
        calcData.valueToDisplay = calcData.value;

        return calcData;
    }
}