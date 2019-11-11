export class MiddleResultOperation {

    constructor() {
        this.isValueMutation = true;
    }

    operate(calcData) {
        
        if (calcData.performedOperations.length === 0) {
            return calcData;
        }
        calcData.valueToDisplay = eval(this.getOperationsString(calcData.performedOperations));
        
        return calcData;
    }
    
    getOperationsString(operations) {

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