import { OperatorOperation } from "./operator.operation.js";

export class DivisionOperation extends OperatorOperation {

    constructor() {
        super('division', '÷', '/', ['NumpadDivide', 'Slash', 'Backslash']);
    }
}