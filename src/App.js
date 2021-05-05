import './App.css';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";
import Bmi from './component/Bmi';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const disptch = useDispatch();
  return (
    <div className="App">
      <Bmi/>
      <h1>Increment/Decrement counter</h1>
      <div>
        <button type="button" class="btn btn-primary" onClick={() => disptch(decrement())}>-</button>
        <input type="text" className="quantity_input" value={myState}></input>
        <button type="button" class="btn btn-primary" onClick={() => disptch(increment())}>+</button>
      </div>
    </div>
  );
}

export default App;
