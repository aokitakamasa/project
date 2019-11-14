import { OpenBracketOperation } from "./open-bracket.operation.js";
import { CloseBracketOperation } from "./close-bracket.operation.js";
import { NumberOperation } from "./number.operation.js";

export class ResultOperation {

    constructor() {
        this.name = 'result';
        this.symbol = '=';
        this.keyCodes = ['NumpadEnter', 'Enter'];
    }

    operate(data) {
        
        if (data.performedOperations.length === 0) {
            return data;
        }

        if (!data.isResult) {
            data.performedOperations.push(new NumberOperation(data.value));
        }

        data.value = eval(this.operationsToJavaScript(data.performedOperations)).toString();
        data.performedOperations = [];
        data.isResult = true;

        return data;
    }

    operationsToJavaScript(operations) {

        let result = '';

        if (operations[operations.length - 1].isOperator) {

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