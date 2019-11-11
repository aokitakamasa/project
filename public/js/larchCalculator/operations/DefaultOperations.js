import { AdditionOperation } from "./AdditionOperation.js";
import { SubtractionOperation } from "./SubtractionOperation.js";
import { MultiplicationOperation } from "./MultiplicationOperation.js";
import { DivisionOperation } from "./DivisionOperation.js";
import { ResultOperation } from "./ResultOperation.js";
import { NegationOperation } from "./NegationOperation.js";
import { CleaningOperation } from "./CleaningOperation.js";
import { ValueCleaningOperation } from "./ValueCleaningOperation.js";
import { BackspaceOperation } from "./BackspaceOperation.js";
import { DotOperation } from "./DotOperation.js";

export let DefaultOperations = [
    AdditionOperation,
    SubtractionOperation,
    MultiplicationOperation,
    DivisionOperation,
    ResultOperation,
    NegationOperation,
    CleaningOperation,
    ValueCleaningOperation,
    BackspaceOperation,
    DotOperation
]