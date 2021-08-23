import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cars: ["GT-R", "R8", "LaFerrari", "Corvette", "GT", "Colorado"],
    };
  }

  render() {
    let carsToDisplay = this.state.cars.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{carsToDisplay}</div>;
  }
}

export default App;
