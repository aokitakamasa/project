import { NumberOperation } from "./NumberOperation.js";

export class ResultOperation {

    constructor() {
        this.name = 'result';
        this.symbol = '=';
    }

    operate(calcData) {
        if (calcData.value != null)
            calcData.performedOperations.push(new NumberOperation(calcData.value));
        calcData.valueToDisplay = Math.floor(eval(this.getOperationsString(calcData.performedOperations)));
        calcData.performedOperations = [];
        calcData.value = null;

        return calcData;
    }
    
    getOperationsString(operations) {

        let result = '';

        if (operations && operations.length > 0 && operations[operations.length - 1].isOperator) {
            operations.pop();
        }
        
        for (let operation of operations) {
            result += operation.operator + ' ';
        }

        return result;
    }
}