import React from 'react';
import Child from './Child';
export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: 'hello',
    };
  }
  handleClick = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };
  render() {
    console.log('parent rendered');
    return (
      <main>
        {this.state.counter}
        <br />
        <Child message={this.state.message} />
        <button type="button" onClick={this.handleClick}>
          Increment
        </button>
      </main>
    );
  }
}
