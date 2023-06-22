import './App.css';
import { Button,Container } from 'react-bootstrap';
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
    setInput("0")
    setBefore("")
    setCurrent("")
    
  }
  return (
    
        <div class="d-flex justify-content-end bg-black text-white" >
          <div class="row">
            <div class="d-flex justify-content-end">
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
      <div >
        <div class="d-flex justify-content-end  " >
          <Button className="btn btn-secondary btn-lg rounded-circle" onClick={clear}>AC</Button>
          <Button className="btn btn-secondary btn-lg rounded-circle" >+/-</Button>
          <Button className="btn btn-secondary btn-lg rounded-circle" >%</Button>
          <Button className="btn btn-warning btn-lg rounded-circle"   onClick={operatorType} >÷</Button>
        </div>
        <div class="d-flex justify-content-end">
          <Button className="btn btn-dark btn-lg rounded-circle" onClick={inputNum}>7</Button>
          <Button className="btn btn-dark btn-lg rounded-circle" onClick={inputNum}>8</Button>
          <Button className="btn btn-dark btn-lg rounded-circle "  onClick={inputNum}>9</Button>
          <Button className="btn btn-warning btn-lg rounded-circle"  onClick={operatorType}>x</Button>
        </div>
        <div class="d-flex justify-content-end">
          <Button className="btn btn-dark btn-lg rounded-circle" onClick={inputNum}>4</Button>
          <Button className="btn btn-dark btn-lg rounded-circle" onClick={inputNum}>5</Button>
          <Button className="btn btn-dark btn-lg rounded-circle"  onClick={inputNum}>6</Button>
          <Button className="btn btn-warning btn-lg rounded-circle"   onClick={operatorType}>-</Button>
        </div>
        <div class="d-flex justify-content-end">
          <Button className="btn btn-dark btn-lg rounded-circle"  onClick={inputNum}>1</Button>
          <Button className="btn btn-dark btn-lg rounded-circle"  onClick={inputNum}>2</Button>
          <Button className="btn btn-dark btn-lg rounded-circle" onClick={inputNum}>3</Button>
          <Button className="btn btn-warning btn-lg rounded-circle"   onClick={operatorType}>+</Button>
        </div>
        <div class="d-flex justify-content-end">
          <Button  className="btn btn-dark btn-lg rounded-pill" onClick={inputNum}>0</Button>
          <Button className="btn btn-dark btn-lg rounded-circle">.</Button>
          <Button className="btn btn-warning btn-lg rounded-circle"  onClick={equals}>=</Button>

        </div>
        </div>
      </div>
    </div>
  
  );
}

export default App;
