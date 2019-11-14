export class ValueCleaningOperation {

    constructor() {
        this.name = 'valueCleaning';
        this.symbol = 'CE';
    }

    operate(data) {
        
        data.value = '0';
        data.isResult = false;

        return data;
    }
}