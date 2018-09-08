import Counter from "./Counter";
import React, { Component } from 'react';

class Counters extends Component {
  componentDidUpdate(prevProps,prevState){
    console.log('prevProps',prevProps);
    console.log('prevState',prevState);
  }
  render() {
    const { onReset, counters, onDelete, onIncrement }=this.props;
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

// const Counters = ({ onReset, counters, onDelete, onIncrement }) => {
//   //object destructing
//   console.log('Counters Bar rendered');
//   return (
//     <div>
//       <button className="btn btn-secondary btn-sm" onClick={onReset}>
//         Reset
//       </button>
//       {counters.map(eachCounter => (
//         <Counter
//           counter={eachCounter}
//           key={eachCounter.id} //used internally by react ,cannot be accessed via props
//           onDelete={onDelete}
//           onIncrement={onIncrement}
//         />
//       ))}
//     </div>
//   );
// };

// export default Counters;
