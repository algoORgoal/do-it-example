import React, { Component } from 'react';
import Counter2 from './Counter2';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };

    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return <Counter2 count={this.state.count} onAdd={this.increaseCount} />;
  }
}

export default CounterApp;
