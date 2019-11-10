import { NumberOperation } from "./NumberOperation.js";

export class OperatorOperation {

    constructor(name, symbol, operator) {
        this.name = name;
        this.symbol = symbol;
        this.operator = operator;
        this.isOperator = true;
    }

    operate(calcData) {

        return this.pushOperator(calcData);
    }

    pushOperator(calcData) {
        
        let lastOperation = this.getLastOperation(calcData.performedOperations);

        if (calcData.value === null && lastOperation && lastOperation.isOperator) {
            calcData.performedOperations.pop();
        }
        else if (calcData.value === null && isFinite(calcData.valueToDisplay)) {
            calcData.performedOperations.push(new NumberOperation(calcData.valueToDisplay));
            calcData.value = null;
        }
        else {
            calcData.performedOperations.push(new NumberOperation(calcData.value));
            calcData.value = null;
        }

        calcData.performedOperations.push(this);

        return calcData;
    }

    getLastOperation(operations) {
        
        return operations[operations.length - 1];
    }
}