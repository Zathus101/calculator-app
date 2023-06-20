import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div class="area" >
      <div class="number">
        <div class="digits">
          0
        </div>
      </div>
      <div class="bot-btns">
          <div id="btn-row1">
              <Button>AC</Button>
              <Button>+/-</Button>
              <Button>%</Button>
              <Button>÷</Button>
          </div>
          <div id="btn-row2">
              <Button>7</Button>
              <Button>8-</Button>
              <Button>9</Button>
              <Button>x</Button>
          </div>
          <div id="btn-row3">
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
              <Button>-</Button>
          </div>
          <div id="btn-row4">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
              <Button>+</Button>
          </div>
          <div id="btn-row5">
              <Button>0</Button>
              <Button>.</Button>
              <Button>=</Button>
              
          </div>
      </div>
    </div>
  );
}

export default App;
