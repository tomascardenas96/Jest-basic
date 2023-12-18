const calculator = require("./calculator");

describe("Sumar", () => {
  const calculatorAdd = (a, b) => calculator.add(a, b);
  it("should return 3", () => {
    expect(calculatorAdd(1, 2)).toBe(3);
  });

  it("should return false", () => {
    expect(calculatorAdd(1 ,2)).not.toBe(4);
  })
});
