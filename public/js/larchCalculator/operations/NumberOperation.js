export class NumberOperation {

    constructor(number) {
        this.name = 'number' + number;
        this.symbol = number == null ? null : number.toString().replace('.', ',');
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
        
        if (calcData.value === null) {
            calcData.value = 0;
        }
        calcData.value = calcData.value.toString();
        calcData.value += this.operator;
        calcData.value = +calcData.value;

        calcData.valueToDisplay = calcData.value;

        return calcData;
    }
}