export class DotOperation {

    constructor() {
        this.name = 'dot';
        this.symbol = ',';
        this.operator = '.';
        this.keyCodes = ['NumpadDecimal'];
    }

    operate(data) {
        
        if (data.value.indexOf('.') !== -1) {
            return data;
        }

        data.value += '.';
        data.isResult = false;

        return data;
    }
}