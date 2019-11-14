import { AdditionOperation } from "./operations/operator-operations/addition.operation.js";
import { DivisionOperation } from "./operations/operator-operations/division.operation.js";
import { MultiplicationOperation } from "./operations/operator-operations/multiplication.operation.js";
import { SubtractionOperation } from "./operations/operator-operations/subtraction.operation.js";
import { NegationOperation } from "./operations/negation.operation.js";
import { BackspaceOperation } from "./operations/backspace.operation.js";
import { CleaningOperation } from "./operations/cleaning.operation.js";
import { ValueCleaningOperation } from "./operations/value-cleaning.operation.js";
import { DotOperation } from "./operations/dot.operation.js";
import { ResultOperation } from "./operations/result.operation.js";

export let defaultMathCalculatorOperations = [
    AdditionOperation,
    DivisionOperation,
    MultiplicationOperation,
    SubtractionOperation,
    NegationOperation,
    BackspaceOperation,
    CleaningOperation,
    ValueCleaningOperation,
    DotOperation,
    ResultOperation
];