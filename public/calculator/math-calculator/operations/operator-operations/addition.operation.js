import { OperatorOperation } from "./operator.operation.js";

export class AdditionOperation extends OperatorOperation {

    constructor() {
        super('addition', '+', '+', ['NumpadAdd', 'Equal']);
    }
}