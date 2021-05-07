import React from "react";
import "./App.css";
// Debemos importar nuestras acciones declaradas en actions.js y los dos hooks que harán la magia, que son:
//     useSelector: Se encarga de devolvernos la propiedad del estado a la que nosotros queramos acceder.
//     useDispatch: Se encarga de decirle al reducer qué acción queremos ejecutar.
import { useSelector, useDispatch } from "react-redux";
import { addCounter, decreaseCounter } from "../src/redux/actions";

function App() {
  const count = useSelector((state) => state.count);
  const dispatcher = useDispatch();
  // El dispatcher debemos ejecutarlo y en su interior pasaremos
  // como parámetro la información de la acción a ejecutar por el reducer
  const add = () => dispatcher(addCounter());
  const decrease = () => dispatcher(decreaseCounter());

  return (
    <div className="App">
      <header className="App-header">
        <h3>Counter with Redux Hooks {count}</h3>
        <button onClick={add}>ADD +1</button>
        <button onClick={decrease}>DECREASE -1</button>
      </header>
    </div>
  );
}

export default App;
