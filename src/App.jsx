import React from "react";
import Navbar from "./components/Navbar";

import "./styles/App.css";

//Componente em classe é uma classe que herda a classe component do react,
// e retorna HTML do método render.

class App extends React.Component {

  //metodo responsavel por renderizar o conteúdo HTML do nosso componente
  render() {
    return <Navbar />
  
  }
}

export default App;
