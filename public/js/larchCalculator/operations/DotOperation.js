export class DotOperation {

    constructor() {
        this.name = 'dot';
        this.symbol = ',';
        this.operator = '.';
        this.isNumber = true;
    }

    operate(calcData) {

        if (calcData.value === null) {
            calcData.value = '0';
        }
        
        if (calcData.value.toString().indexOf('.') !== -1) {
            return calcData;
        }

        calcData.value += '.';
        
        calcData.valueToDisplay = calcData.value;

        return calcData;
    }
}