import React from 'react';
import Proptypes from 'prop-types';

const SFC = (props, context) => {
  const { somePropValue } = props;
  const { someContextValue } = context;
  return <h1>Hello, {somePropValue}</h1>;
};

SFC.propTypes = { somePropValue: Proptypes.any };
SFC.defaultProps = { somePropValue: 'default value' };

export default SFC;
