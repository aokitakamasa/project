export class NegationOperation {

    constructor() {
        this.name = 'negation';
        this.symbol = '±';
    }

    operate(calcData) {
        
        calcData.value *= -1;
        calcData.valueToDisplay = calcData.value;

        return calcData;
    }
}