import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    /* imageUrl: 'https://picsum.photos/200' */
  };
  styles = {
    fontSize: 50,
    fontWeight: 'bold',
  };

  /* constructor() {
   *   super();
   *   this.handleIncrement = this.handleIncrement.bind(this);
   * } */


  handleIncrement = (product) => {
    console.log(product);
    this.setState({value: this.state.value + 1});
  };

  doHandleIncrement = () => {
    this.handleIncrement({id: 1})
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => {this.handleIncrement({id: 1})}}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const {value} = this.state;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
