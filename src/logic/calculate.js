import operators from "./operators";
function calculate(operand, operation, x) {
  console.log(operation);
  return operators[operation](operand, x);
}
export default calculate;
