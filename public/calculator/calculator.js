export class Calculator {

    constructor(data = null, errorHandler = null, middleOperation = null) {

        this.data = data;
        this.errorHandler = errorHandler;
        this.middleOperation = middleOperation;
    }

    performOperation(operation) {

        let operationResult = operation.operate(this.data);

        if (this.middleOperation) {
            operationResult = this.middleOperation.operate(operationResult, operation);
        }

        if (this.errorHandler) {
            operationResult = this.errorHandler.handle(operationResult, operation);
        }

        this.data = operationResult;
    }
}

