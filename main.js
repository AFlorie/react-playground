const scaleNames = {
  b: "binary",
  d: "decimal",
};

function toBinary(decimal) {
  let result = decimal.toString(2);
  return +result;
}

function toDecimal(binary) {
  return parseInt(binary, 2);
}

const BaseNumberInput = ({ value, scale, onChangeBase }) => {
  return (
    <fieldset>
      <legend>Saisissez la valeur en {scaleNames[scale]}:</legend>
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeBase(e.target.value)}
      />
    </fieldset>
  );
};

const App = () => {
  // const [state, setState] = React.useState({ value: 0, scale: "d" });
  const [binary, setBinary] = React.useState("");
  const [decimal, setDecimal] = React.useState("");

  const handleBinaryChange = (value) => {
    setBinary(value);
    setDecimal(toDecimal(value));
  };

  const handleDecimalChange = (value) => {
    setDecimal(parseInt(value));
    setBinary(toBinary(parseInt(value)));
  };
  console.log("binary", binary);
  console.log("to decimal", toDecimal(binary));
  return (
    <div>
      <BaseNumberInput
        scale="b"
        value={binary}
        onChangeBase={handleBinaryChange}
      />
      <BaseNumberInput
        scale="d"
        value={decimal}
        onChangeBase={handleDecimalChange}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
