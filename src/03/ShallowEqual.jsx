import React, { Component } from 'react';
import { shallowEqualArrays } from 'shallow-equal';

class ShallowEqual extends Component {
  render() {
    const obj = { name: 'park' };
    const mylist = [1, 2, 3, obj];
    const list1 = [1, 2, 3, obj];
    const list2 = [1, 2, 3, { name: 'park' }];

    return (
      <div>
        <div>result1 : {String(mylist === list1)}</div>
        <div>result2 : {String(shallowEqualArrays(mylist, list1))}</div>
        <div>result3 : {String(shallowEqualArrays(list1, list2))}</div>
      </div>
    );
  }
}

export default ShallowEqual;
