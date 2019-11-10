export class CleaningOperation {

    constructor() {
        this.name = 'cleaning';
        this.symbol = 'C';
        this.keyCodes = ['Delete', 'NumpadDecimal'];
    }

    operate(calcData) {
        
        calcData.value = 0;
        calcData.valueToDisplay = calcData.value;
        calcData.performedOperations = [];

        return calcData;
    }
}