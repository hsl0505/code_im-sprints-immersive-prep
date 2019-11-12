const { add, substract, multiply, divide } = require("../math");

// 1. Create test case to check add function works what it is supposed to be.
test('Adding 1 - 1 equals 0', () => {
    expect(add(1, 1)).toBe(0)
})

// 2. Create test case to check substract function works what it is supposed to be.
test('Substracting 2 - 1 equals 1', () => {
    expect(substract(2, 1)).toBe(1)
})

// 3. Create test case to check multiply function works what it is supposed to be.
test('Multiplying 2 * 2 equals 4', () => {
    expect(multiply(2, 2)).toBe(4)
})
// 4. Create test case to check divide function works what it is supposed to be.
test('Deviding 2 / 2 equals 1', () => {
    expect(divide(2, 2)).toBe(1)
})

// 5. Create test case to check divide function reutns "cannot divide something with 0"
// when it tries to divdie a number with zero.
test('Deviding 2 / 0 equals false', () => {
    expect(divide(2, 0)).toBe("cannot divide something with 0")
})
// 6. Group tests using `describe()`
describe('test math.js', () => {
    test('Adding 1 - 1 equals 0', () => {
        expect(add(1, 1)).toBe(0)
    })
    test('Substracting 2 - 1 equals 1', () => {
        expect(substract(2, 1)).toBe(1)
    })
    test('Multiplying 2 * 2 equals 4', () => {
        expect(multiply(2, 2)).toBe(4)
    })
    test('Deviding 2 / 2 equals 1', () => {
        expect(divide(2, 2)).toBe(1)
    })
    test('Deviding 2 / 0 equals false', () => {
        expect(divide(2, 0)).toBe("cannot divide something with 0")
    })
})
