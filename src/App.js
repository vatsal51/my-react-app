import './App.css';
import Airports from './components/Airports';
import React from "react";
import ReactDOM from "react-dom";





function App() {

  
  return (
    <div className="App box">
     <Airports Airports={Airports}/>
    </div>
  );
}

export default App
