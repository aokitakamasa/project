import { OperatorOperation } from "./OperatorOperation.js";

export class SubtractionOperation extends OperatorOperation {

    constructor() {
        super('subtraction', '-', '-');
    }
}