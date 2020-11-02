import calculate from "./calculate";

test("add operator, should return 3 from 1+2", () => {
  expect(calculate(1, "+", 2)).toBe(3);
});
