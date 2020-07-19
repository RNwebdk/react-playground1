import React, { Component } from 'react';

class StatePractice extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
    };
  }

  handleFocus = (event) => {
    this.setState({
      message: 'You agree to out terms of service',
    });
  };

  clearTextHandler = () => {
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h3 onMouseMove={this.clearTextHandler}>{this.state.message}</h3>
        <input type='text' onFocus={this.handleFocus} />
      </div>
    );
  }
}

export default StatePractice;
