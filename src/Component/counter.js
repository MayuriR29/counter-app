import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
  };

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.state.value;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  render() {
    return (
      <div>
        <button className={this.getBadgeClass()}>{this.formatCount()}</button>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={()=>this.props.onDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}
export default Counter;
