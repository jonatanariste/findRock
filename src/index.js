import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// // // If you want your app to work offline and load faster, you can change
// // // unregister() to register() below. Note this comes with some pitfalls.
// // // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();

// // Javascript Pelado o Vanilla
// // let elemento = document.createElement("p");
// // elemento.innerHTML = "Soy Jony de Berazategui";
// // let contenedor = document.getElementById("root");
// // contenedor.appendChild(elemento);

// // let elemento = <p>Hola, soy Jony desde JSX</p>;
// // let container = document.getElementById("root");
// // ReactDOM.render(elemento, container);

// // let jsx = React.createElement("h1", {}, "Hola Soy Jony desde Create Element");
// let nombre = "Jonatan";
// let apellido = "Ariste";
// let edad = 37;
// let calculo = edad => {
//   return 5 + 5 + edad;
// };
// let jsxMutiple = (
//   <div>
//     <h1>
//       Soy una variable con muchos elementos soy {nombre} y tengo {calculo(20)}
//     </h1>
//     <h3>JSX te amo</h3>
//     <p>Esto es es lo mas glorioso del mundo</p>
//   </div>
// );
// let container = document.getElementById("root");
// ReactDOM.render(jsxMutiple, container);
