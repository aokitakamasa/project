import { OperatorOperation } from "./operator.operation.js";

export class SubtractionOperation extends OperatorOperation {

    constructor() {
        super('subtraction', '-', '-', ['Minus', 'NumpadSubtract']);
    }
}