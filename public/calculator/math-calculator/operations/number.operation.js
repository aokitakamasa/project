export class NumberOperation {

    constructor(number) {
        this.name = 'number' + number;
        this.symbol = number.toString().replace('.', ',');
        this.operator = number;
        this.keyCodes = ['Digit' + number, 'Numpad' + number];
    }

    operate(data) {

        if (data.value === '0' || data.isResult) {
            data.value = '';
        }

        data.value += this.operator;
        data.isResult = false;

        return data;
    }

    static getNumberOperations(to, from = 0) {
        let operations = [];
        for (let i = from; i <= to; i++) {
            operations.push(new NumberOperation(i));
        }
        return operations;
    }
}