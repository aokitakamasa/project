import { OperatorOperation } from "./OperatorOperation.js";

export class DivisionOperation extends OperatorOperation {

    constructor() {
        super('division', '÷', '/');
        this.keyCodes = ['NumpadDivide', 'Slash', 'Backslash'];
    }
}