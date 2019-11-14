export class MathCalculatorErrorHandler {

    handle(data) {

        if (isFinite(data.value)) {
            data.isError = false;
            return data;
        }

        switch (data.value) {
            case Infinity:
                data.value = 'Division by zero';
                break;
            default:
                data.value = 'Unknown error';
        }
        
        data.performedOperations = [];
        data.isError = true;

        return data;
    }
}