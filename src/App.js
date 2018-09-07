import React, { Component } from "react";
import NavBar from "./Component/NavBar";
import Counters from "./Component/Counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const updatedCounter = this.state.counters.filter(
      eachCounter => eachCounter.id !== counterId
    );
    this.setState({
      counters: updatedCounter
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const resetCounter = this.state.counters.map(eachCounter => {
      eachCounter.value = 0;
      return eachCounter;
    });
    this.setState({
      counters: resetCounter
    });
  };
  render() {
    return (
      <div>
        <NavBar totalCounters={this.state.counters}/>
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default App;
