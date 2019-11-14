import { Calculator } from "../calculator.js";
import { MiddleResultOperation } from './operations/middle-result.operation.js';
import { NumberOperation } from './operations/number.operation.js';
import { MathCaluculatorData } from "./math-calculator-data.js";
import { MathCalculatorErrorHandler } from "./math-calculator-error-handler.js";
import { defaultMathCalculatorOperations } from "./default-math-calculator-operations.js";

export class MathCalculator extends Calculator {

    constructor() {
        super(
            new MathCaluculatorData(),
            new MathCalculatorErrorHandler(),
            new MiddleResultOperation()
        );

        this.operations = [
            ...defaultMathCalculatorOperations.map(o => new o()),
            ...NumberOperation.getNumberOperations(9)
        ];
    }

    performOperation(operation) {
        
        if (this.data.isError) {
            this.data.value = '0';
            this.data.isError = false;
        }

        super.performOperation(operation);
    }

    get valueToDisplay() {

        if (this.data.isError) {
            return this.data.value;
        }

        return new NumberOperation(this.data.value).symbol;
    }

    get operationsToDisplay() {

        let result = '';

        for (let operation of this.data.performedOperations) {
            result += operation.symbol + ' ';
        }

        return result;
    }
}