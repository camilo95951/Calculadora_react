import './App.css';
import React, { Component } from 'react'
import Saludo from './container/saludo/Saludo';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.state = {
      valor:' valor inicial',
    };
    //this.cambio = this.cambio.bind(this);
  }
  render() {
    return (
      <div>
     <p>Mi primera calculadora en react{this.state.valor}</p>
     <input type = "text" onChange = {this.cambio}/>
     <input type = "text" onChange = {this.cambio2}/>
     <input type = "text" onChange = {this.cambio3}/>
     <br/>
     <button onClick = {this.mostrar} className = "button-show">Mostrar</button>
     <button onClick = {this.mostrar} className = "button-show1"Mostrar></button>
     < Saludo  nombre = " funcion saludo" />
      </div>
    )
  }
  /*cambio = (event) => {
    console.log(this.state.valor)
  };*/
  cambio = (event) => {
    const newValue = event.target.value;
    this.setState({valor : newValue});
  }
  cambio2 = (event) => {
    const newValue = event.target.value;
    this.setState({valor : newValue});
  }
  cambio3 = (event) => {
    const newValue = event.target.value;
    this.setState({valor : newValue});
  }
  mostrar = (event) => {
    console.log(this.state.valor)
  };
  mostrar1 = (event) => {
    console.log(this.state.valor)
  };
  mostrar2 = (event) => {
    console.log(this.state.valor)
  };
  
  
}

export default App