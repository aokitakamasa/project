import { NumberOperation } from './operations/NumberOperation.js'
import { ResultOperation } from './operations/ResultOperation.js'
import { MiddleResultOperation } from './operations/MiddleResultOperation.js'
import { DefaultOperations } from './operations/DefaultOperations.js'
import { CalcData } from './CalcData.js'

export class LarchCalc {

    get calcData() {
        return new CalcData(this.value, this.valueToDisplay, this.performedOperations);
    }

    set calcData(calcData) {
        this.value = calcData.value;
        this.valueToDisplay = calcData.valueToDisplay;
        this.performedOperations = calcData.performedOperations;
    }

    get operationsString() {

        let result = '';

        for (let operation of this.performedOperations) {
            result += operation.symbol + ' ';
        }

        return result;
    }

    constructor(operations = []) {
        this.operations = [
            ...operations, 
            ...DefaultOperations.map(o => new o()), 
            ...this.getNumberOperations(9)
        ];
        this.performedOperations = [];
        this.value = 0;
        this.valueToDisplay = this.value;
    }

    performOperation(operation) {
        
        let operationResult = operation.operate(this.calcData);

        if (operation.isOperator) {
            operationResult = new MiddleResultOperation().operate(operationResult);
        }

        if (isFinite(operationResult.valueToDisplay)) {
            this.calcData = operationResult;
        }
        else {
            this.setError(operationResult);
        }
    }

    setError(calcData) {
        if (calcData.valueToDisplay === Infinity) {
            this.valueToDisplay = 'Error - division by zero';
        }
        else {
            this.valueToDisplay = 'Unknown error';
        }
        this.value = null;
        this.performedOperations = [];
    }
    getNumberOperations(to, from = 0) {
        let operations = [];
        for (let i = from; i <= to; i++) {
            operations.push(new NumberOperation(i));
        }
        return operations;
    }
}

