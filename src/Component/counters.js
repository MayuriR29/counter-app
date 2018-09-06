import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
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

  render() {
    return (
      <div>
        {this.state.counters.map(eachCounter => (
          <Counter
            value={eachCounter.value}
            key={eachCounter.id}
            id={eachCounter.id}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
