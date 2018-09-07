import React from "react";
import Counter from "./Counter";

const Counters = ({ onReset, counters, onDelete, onIncrement }) => {
  //object destructing
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
};

export default Counters;
