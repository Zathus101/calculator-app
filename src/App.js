
import './App.css';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  
  const [before, setBefore] = useState("");
  const [current, setCurrent] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);
  const inputNum = (e) => {
    if (current.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setBefore("");
    }

    current
      ? setCurrent((pre) => pre + e.target.innerText)
      : setCurrent(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(current);
  }, [current]);

  useEffect(() => {
    setInput("0");
  }, []);
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (current === "") return;
    if (before !== "") {
      equals();
    } else {
      setBefore(current);
      setCurrent("");
    }

  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "÷":
        cal = String(parseFloat(before) / parseFloat(current));
        break;

      case "+":
        cal = String(parseFloat(before) + parseFloat(current));
        break;
      case "x":
        cal = String(parseFloat(before) * parseFloat(current));
        break;
      case "-":
        cal = String(parseFloat(before) - parseFloat(current));
        break;
      default:
        return;
    }
    setInput("");
    setBefore(cal);
    setCurrent("");
  };

  
  const clear = () => {
    setBefore("")
    setCurrent("")
    setInput("0")
  }
  return (
    <div class="col"  >
      <div class="numbers">
        <div class="digits">
        {input !== "" || input === "0" ? (
            <NumericFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumericFormat
              value={before}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
      </div>
      <div class="bot-btns">
        <div id="btn-row1">
          <Button class="btn btn-secondary btn-lg" disabled onClick={clear}>AC</Button>
          <Button class="btn btn-secondary btn-lg" disabled aria-pressed="true">+/-</Button>
          <Button class="btn btn-secondary btn-lg" disabled>%</Button>
          <Button class="btn btn-warning btn-lg" onClick={operatorType} >÷</Button>
        </div>
        <div id="btn-row2">
          <Button class="btn btn-secondary btn-lg" onClick={inputNum}>7</Button>
          <Button class="btn btn-secondary btn-lg" onClick={inputNum}>8</Button>
          <Button onClick={inputNum}>9</Button>
          <Button class="btn btn-warning" onClick={operatorType}>x</Button>
        </div>
        <div id="btn-row3">
          <Button onClick={inputNum}>4</Button>
          <Button onClick={inputNum}>5</Button>
          <Button onClick={inputNum}>6</Button>
          <Button class="btn btn-warning" onClick={operatorType}>-</Button>
        </div>
        <div id="btn-row4">
          <Button onClick={inputNum}>1</Button>
          <Button onClick={inputNum}>2</Button>
          <Button onClick={inputNum}>3</Button>
          <Button class="btn btn-warning" onClick={operatorType}>+</Button>
        </div>
        <div id="btn-row5">
          <Button onClick={inputNum}>0</Button>
          <Button>.</Button>
          <Button class="btn btn-warning" onClick={equals}>=</Button>

        </div>
      </div>
    </div>
  );
}

export default App;
