// FILEPATH: /workspaces/copilot-handson/test.test.js
const { add } = require('./test'); // assuming your method is exported from test.js

describe('add', () => {
    let result;

    beforeEach(() => {
        result = 0; // reset the result before each test
    });

    test('adds positive numbers correctly', () => {
        add(5);
        expect(result).toBe(5);

        add(10);
        expect(result).toBe(15);
    });

    test('adds negative numbers correctly', () => {
        add(-5);
        expect(result).toBe(-5);

        add(-10);
        expect(result).toBe(-15);
    });

    test('adds zero correctly', () => {
        add(0);
        expect(result).toBe(0);
    });
});