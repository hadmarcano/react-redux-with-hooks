import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Importamos desde redux la funcion para crear nuestro store
import { createStore } from "redux";
// Importamos el Provider desde react-redux
import { Provider } from "react-redux";
// Importamos nuestro reducer
import { reducer } from "../src/redux/reducer";

const initialstate = {
  count: 0,
};

// La funcion "createStore" debe recibir nuestro "reducer" y el "initialState".
const store = createStore(reducer, initialstate);

// Definimos el "Provider" como componente de orden superior
// sobre nuestro arbol de componentes y recibe como "props el "store":
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
