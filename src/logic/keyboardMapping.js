const listeningFunction = ({
  clear,
  displayResult,
  enterDigit,
  enterOperation,
}) => {
  return (e) => {
    if (parseInt(e.key) >= 0 && parseInt(e.key) <= 9) {
      enterDigit(parseInt(e.key));
    } else if (e.key === "Enter" || e.key === "=") {
      displayResult();
    } else if (
      e.key === "+" ||
      e.key === "-" ||
      e.key === "/" ||
      e.key === "*"
    ) {
      enterOperation(e.key);
    } else if (e.key === "c") {
      clear();
    } else if (e.key === ".") {
      enterDigit(".");
    }
  };
};

export default listeningFunction;
