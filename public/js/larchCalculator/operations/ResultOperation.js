import { NumberOperation } from "./NumberOperation.js";
import { OpenBracketOperation } from "./OpenBracketOperation.js";
import { CloseBracketOperation } from "./CloseBracketOperation.js";

export class ResultOperation {

    constructor() {
        this.name = 'result';
        this.symbol = '=';
        this.isValueMutation = true;
    }

    operate(calcData) {
        if (calcData.performedOperations.length === 0) {
            return calcData;
        }
        if (calcData.value != null) {
            calcData.performedOperations.push(new NumberOperation(calcData.value));
        }
        calcData.valueToDisplay = Math.floor(eval(this.getOperationsString(calcData.performedOperations)));
        calcData.performedOperations = [];
        calcData.value = null;

        return calcData;
    }
    
    getOperationsString(operations) {

        let result = '';

        if (operations && operations.length > 0 && operations[operations.length - 1].isOperator) {

            let operator = operations.pop();

            operations.unshift(new OpenBracketOperation());
            operations.push(new CloseBracketOperation());

            operations = [...operations, operator, ...operations];
        }
        
        for (let operation of operations) {
            result += operation.operator + ' ';
        }

        return result;
    }
}