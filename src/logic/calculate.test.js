import calculate from "./calculate";

test("ADD: 1+2 to equal 3", () => {
  expect(calculate(1, "+", 2)).toBe(3);
});
test("SUBTRACT: 1-2 to equal -1", () => {
  expect(calculate(1, "-", 2)).toBe(-1);
});
test("DIVIDE 4/2 to equal 2", () => {
  expect(calculate(4, "/", 2)).toBe(2);
});
test("Multiply 2*10 to equal 20", () => {
  expect(calculate(2, "*", 10)).toBe(20);
});
test("Divide decimal", () => {
  expect(calculate(4, "/", 3)).toBe(1.3333333);
});
test("large Number 200000000000+300000000000 to equal 500000000000", () => {
  expect(calculate(200000000000, "+", 300000000000)).toBe(500000000000);
});
test("Exponent 2^4 to be 16", () => {
  expect(calculate(2, "^", 4)).toBe(16);
});
