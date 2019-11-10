import { OperatorOperation } from "./OperatorOperation.js";

export class MultiplicationOperation extends OperatorOperation {

    constructor() {
        super('multiplication', '×', '*');
        this.keyCodes = ['NumpadMultiply'];
    }
}