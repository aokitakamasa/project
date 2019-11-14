export class MiddleResultOperation {

    operate(data, operation) {

        if (!operation.isOperator || data.performedOperations.length === 0) {
            return data;
        }

        data.value = eval(this.operationsToJavaScript(data.performedOperations));
        data.isResult = true;
        
        return data;
    }

    operationsToJavaScript(operations) {

        operations = [...operations];
        let result = '';

        if (operations[operations.length - 1].isOperator) {
            operations.pop();
        }
        
        for (let operation of operations) {
            result += operation.operator + ' ';
        }

        return result;
    }
}