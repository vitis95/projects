import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { tsConstructorType } from '@babel/types';

function App() {
  constructor(props){
    super(props);
    this.state = {
        isTextVisible: false
   };
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2> IVAN DE VITA </h2>
      </header>
      <p className="App.intro">
        prova prova prova 
      </p>
      <button className = "btn btn-primary" style={{width:"200px", height:"200px"}}>
        MOSTRA TESTO
      </button>
    </div>
  );
}

export default App;
