import React from 'react';
export default class Child extends React.Component {
  render() {
    console.log('child rendered');
    return <div>{this.props.message}</div>;
  }
}
