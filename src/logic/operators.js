const operators = {
  "+": (a, b) => +(a + b).toPrecision(8),
  "-": (a, b) => +(a - b).toPrecision(8),
  "/": (a, b) => +(a / b).toPrecision(8),
  "*": (a, b) => +(a * b).toPrecision(8),
  "^%": (a, b) => +(((b / a) * 100 - 100) / 100).toPrecision(8),
  "^": (a, b) => +(a ** b).toPrecision(8),
  sqrt: (a, b) => +Math.sqrt(b).toPrecision(8),
};
export default operators;
