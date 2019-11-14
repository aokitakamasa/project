import { OperatorOperation } from "./operator.operation.js";

export class MultiplicationOperation extends OperatorOperation {

    constructor() {
        super('multiplication', '×', '*', ['NumpadMultiply']);
    }
}