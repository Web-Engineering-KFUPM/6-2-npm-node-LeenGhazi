import _ from "lodash"

export function parseNumbers(input) {
    return { numbers: _.split(input, ",").map(num => Number(num.trim())) };
}

export function isValidOperation(operation) {
    return { isValid: _.includes(["add", "subtract", "multiply", "divide"], operation.toLowerCase()) };
}