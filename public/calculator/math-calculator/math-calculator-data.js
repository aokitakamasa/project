export class MathCaluculatorData {

    constructor(value = '0', isError = false, isResult = false, performedOperations = []) {
        this.value = value;
        this.isError = isError;
        this.isResult = isResult;
        this.performedOperations = performedOperations;
    }
}