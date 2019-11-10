export class NumberOperation {

    constructor(number) {
        this.name = 'number' + number;
        this.symbol = number == null ? null : number.toString();
        this.operator = number;
        this.keyCodes = ['Digit' + number, 'Numpad' + number];
        this.isNumber = true;
        this.isValueMutation = true;
    }

    operate(calcData) {

        if (calcData.value === 0 && this.operator === 0) {
            calcData.valueToDisplay = calcData.value;
            return calcData;
        }
        
        calcData.value = (calcData.value * 10);

        if (calcData.value >= 0) {
            calcData.value += this.operator;
        }
        else {
            calcData.value -= this.operator;
        }

        calcData.valueToDisplay = calcData.value;

        return calcData;
    }
}