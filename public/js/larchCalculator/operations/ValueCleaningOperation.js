export class ValueCleaningOperation {

    constructor() {
        this.name = 'valueCleaning';
        this.symbol = 'CE';
        this.isValueMutation = true;
    }

    operate(calcData) {
        
        calcData.value = 0;
        calcData.valueToDisplay = calcData.value;

        return calcData;
    }
}