export class CleaningOperation {

    constructor() {
        this.name = 'cleaning';
        this.symbol = 'C';
        this.keyCodes = ['Delete', 'NumpadDecimal'];
    }

    operate(data) {
        
        data.value = '0';
        data.isResult = false;
        data.performedOperations = [];

        return data;
    }
}