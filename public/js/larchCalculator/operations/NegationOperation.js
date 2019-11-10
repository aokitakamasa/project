export class NegationOperation {

    constructor() {
        this.name = 'negation';
        this.symbol = '±';
        this.isValueMutation = true;
    }

    operate(calcData) {

        if (calcData.value === null) {

            if (isFinite(calcData.valueToDisplay)) {
                calcData.value = calcData.valueToDisplay;
            }
            else {
                return calcData;
            }
        }
        calcData.value *= -1;
        calcData.valueToDisplay = calcData.value;

        return calcData;
    }
}