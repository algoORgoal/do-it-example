import React from 'react';
import Proptypes from 'prop-types';

class ChildComponent extends React.Component {
  render() {
    const { boolValue, numValue, arrayValue, objValue, nodeValue, funcValue } = this.props;
    return (
      <div>
        <span>불리언값: {boolValue}</span>
        <span>숫자값: {numValue}</span>
        <span>배열값: {arrayValue}</span>
        <span>객체값: {String(objValue)}</span>
        <span>노드값: {nodeValue}</span>
        <span>함수값: {String(funcValue)}</span>
      </div>
    );
  }
}

ChildComponent.propTypes = {
  boolValue: Proptypes.bool,
  numValue: Proptypes.number,
  arrayValue: Proptypes.arrayOf(Proptypes.number),
  objValue: Proptypes.object,
  nodeValue: Proptypes.node,
  funcValue: Proptypes.func,
};

export default ChildComponent;
