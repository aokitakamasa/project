import { OperatorOperation } from "./OperatorOperation.js";

export class AdditionOperation extends OperatorOperation {

    constructor() {
        super('addition', '+', '+', );
        
        this.keyCodes = ['NumpadAdd', 'Equal'];
    }
}