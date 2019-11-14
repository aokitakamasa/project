export class NegationOperation {

    constructor() {
        this.name = 'negation';
        this.symbol = '±';
    }

    operate(data) {
        
        data.value = String(data.value * -1);
        data.isResult = false;

        return data;
    }
}