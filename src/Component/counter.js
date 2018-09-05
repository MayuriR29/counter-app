import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags:['tag1','tag2','tag3']
  };

  formatCount() {
    const count = this.state.count;
    return count === 0 ? 'Zero':count;
  }

  render() {
    return (
      <div>
        <button className={this.getBadgeClass()} >{this.formatCount()}</button>
        <button className="btn btn-secondary btn-sm" >Increment</button>
        <ul>{this.state.tags.map((eachtag,index)=>{
          return <li key={index}>{eachtag}</li>
        })}</ul>
      </div>
    );
  }

  getBadgeClass() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
}
export default Counter;
