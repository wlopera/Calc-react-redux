import React, { Component } from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Calc from "./Calc";
import { SUMAR, RESTAR, MULTIPLICAR, DIVIDIR, VALUEX, VALUEY } from "./actions";

const initialState = {
  valueX: 0,
  valueY: 0,
  total: 0,
  product: "",
};

const reducer = (state = initialState, action) => {
  const statusCopy = Object.assign({}, state);

  switch (action.type) {
    case SUMAR:
      // console.log(11, state, action);
      statusCopy.total = parseFloat(state.valueX) + parseFloat(state.valueY);
      statusCopy.product = action.type;
      return statusCopy;
    case RESTAR:
      statusCopy.total = parseFloat(state.valueX) - parseFloat(state.valueY);
      statusCopy.product = action.type;
      return statusCopy;
    case MULTIPLICAR:
      statusCopy.total = parseFloat(state.valueX) * parseFloat(state.valueY);
      statusCopy.product = action.type;
      return statusCopy;
    case DIVIDIR:
      statusCopy.product = action.type;
      if (0 !== state.valueY) {
        statusCopy.total = parseFloat(state.valueX) / parseFloat(state.valueY);
        return statusCopy;
      } else {
        statusCopy.total = "División x cero";
        return statusCopy;
      }
    case VALUEX:
      statusCopy.product = "";
      statusCopy.total = "";
      if (action.item === "") {
        statusCopy.valueX = 0;
      } else {
        statusCopy.valueX = parseFloat(action.item);
      }
      return statusCopy;
    case VALUEY:
      statusCopy.product = "";
      statusCopy.total = "";
      if (action.item === "") {
        statusCopy.valueY = 0;
      } else {
        statusCopy.valueY = parseFloat(action.item);
      }
      return statusCopy;

    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => {
  const handlerChange = (el) => {
    if (isNaN(el.target.value)) {
      return;
    }

    const statusCopy = Object.assign({}, this.state);
    statusCopy[el.target.name] = parseFloat(el.target.value);
    this.setState(statusCopy);
    this.setState({ total: "", product: "" });
  };

  return (
    <Provider store={store}>
      <Calc />
    </Provider>
  );
};

export default App;
