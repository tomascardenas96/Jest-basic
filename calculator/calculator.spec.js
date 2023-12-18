const calculator = require("./calculator");

describe("Sumar", () => {
  const calculatorAdd = (a, b) => calculator.add(a, b);
  it("add two number correctly", () => {
    expect(calculatorAdd(1, 2)).toBe(3);
  });

  it("add two negative numbers correctly", () => {
    const result = calculator.add(-5, -10);
    expect(calculatorAdd(-5, -10)).toBe(-15);
  });

  it("add two decimal numbers", () => {
    const result = calculator.add(1.6, 4.2);
    expect(result).toBeCloseTo(5.8);
  });

  it("add a number to zero correctly", () => {
    const result = calculator.add(6, 0);
    expect(result).toBe(6);
  });

  it("add a number to string, and should return Nan", () => {
    const result = calculator.add('abc', 3);
    expect(isNaN(result)).toBe(true);
  });
});
