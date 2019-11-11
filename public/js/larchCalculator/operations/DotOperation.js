export class DotOperation {

    constructor() {
        this.name = 'dot';
        this.symbol = ',';
        this.operator = '.';
        this.isNumber = true;
    }

    operate(calcData) {

        if (calcData.value.toString().indexOf('.') !== -1) {
            return calcData;
        }

        if (calcData.value === null) {
            calcData.value = '0';
        }
        calcData.value += '.';
        
        calcData.valueToDisplay = calcData.value;

        return calcData;
    }
}