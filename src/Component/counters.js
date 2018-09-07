import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 1 },
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
        <button className="btn btn-secondary btn-sm" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map(eachCounter => (
          <Counter
            counter={eachCounter}
            key={eachCounter.id} //used internally by react ,cannot be accessed via props
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
