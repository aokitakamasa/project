import { NumberOperation } from '../number.operation.js'

export class OperatorOperation {

    constructor(name, symbol, operator, keyCodes) {
        this.name = name;
        this.symbol = symbol;
        this.operator = operator;
        this.keyCodes = keyCodes;
        this.isOperator = true;
    }

    operate(data) {

        return this.pushOperator(data);
    }

    getLastOperation(operations) {
        
        return operations[operations.length - 1];
    }

    pushOperator(data) {
        
        let lastOperation = this.getLastOperation(data.performedOperations);

        if (data.isResult && lastOperation && lastOperation.isOperator) {
            data.performedOperations.pop();
        }
        else {
            data.performedOperations.push(new NumberOperation(data.value));
            data.value = '0';
        }
        
        data.performedOperations.push(this);

        return data;
    }
}