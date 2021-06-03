// import logo from './logo.svg';
import React from "react";
import "./App.css";
import NewComp from "./Components/NewComp";

class App extends React.Component{

  styles ={
    fontStyle: "bold",
    color: "Green"
  };
  render(){
    return(
      <div className = "App">
        <h3 style= {this.styles}>Welcome to the Skilln</h3>
        <NewComp/>
      </div>
    );
  }
}
export default App;
