import React from 'react';

class MyPureComponent extends React.PureComponent {
  componentDidUpdate() {
    console.log('MyPureComponent 새로 고침');
  }

  render() {
    console.log('흠1');
    return null;
  }
}

export default MyPureComponent;
