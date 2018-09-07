import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(eachCounter => (
          <Counter
            counter={eachCounter}
            key={eachCounter.id} //used internally by react ,cannot be accessed via props
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
