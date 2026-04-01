export function add(numbers) {
    return { result: numbers.reduce((result, num) => result + num, 0) }
}

export function subtract(numbers) {
    return { result: numbers.reduce((result, num) => result - num) }
}

export function multiply(numbers) {
    return { result: numbers.reduce((result, num) => result * num) }
}

export function divide(numbers) {
    return { result: numbers.reduce((result, num) => result / num) }
}