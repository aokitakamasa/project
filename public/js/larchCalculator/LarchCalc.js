import { NumberOperation } from './operations/NumberOperation.js'
import { ResultOperation } from './operations/ResultOperation.js'
import { DefaultOperations } from './operations/DefaultOperations.js'
import { CalcData } from './CalcData.js'

export class LarchCalc {

    get calcData() {
        return new CalcData(this.value, this.valueToDisplay, this.performedOperations);
    }

    get operationsString() {

        let result = '';

        for (let operation of this.performedOperations) {
            result += operation.symbol + ' ';
        }

        return result;
    }

    constructor(operations = []) {
        this.operations = [...operations, ...DefaultOperations.map(o => new o()), ...this.getNumberOperations(9)];
        this.performedOperations = [];
        this.value = 0;
        this.valueToDisplay = this.value;
    }

    performOperation(operation) {
        let isResultOperation = operation instanceof ResultOperation;

        let operationResult = operation.operate(this.calcData);

        let result = new ResultOperation().operate(new CalcData(
            operationResult.value,
            operationResult.valueToDisplay,
            [...operationResult.performedOperations]
        ));

        if (isFinite(isResultOperation ? operationResult.valueToDisplay : result.valueToDisplay)) {
            this.value = operationResult.value;
            if (operation.isOperator) {
                this.valueToDisplay = result.valueToDisplay;
            }
            else {
                this.valueToDisplay = operationResult.valueToDisplay;
            }
            this.performedOperations = operationResult.performedOperations;
        }
        else {
            this.value = null;
            this.valueToDisplay = 'Error - division by zero';
            this.performedOperations = [];
        }
    }

    getNumberOperations(to, from = 0) {
        let operations = [];
        for (let i = from; i <= to; i++) {
            operations.push(new NumberOperation(i));
        }
        return operations;
    }
}

