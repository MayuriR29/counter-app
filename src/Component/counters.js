import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;//object destructing
    return (
      <div>
        <button className="btn btn-secondary btn-sm" onClick={onReset}>
          Reset
        </button>
        {counters.map(eachCounter => (
          <Counter
            counter={eachCounter}
            key={eachCounter.id} //used internally by react ,cannot be accessed via props
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
