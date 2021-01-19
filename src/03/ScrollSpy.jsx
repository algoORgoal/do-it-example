import React, { Component } from 'react';

class ScrollSpy extends Component {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.checkPosition = this.checkPosition.bind(this);
    window.addEventListener('scroll', this.checkPosition);
  }

  setRef(ref) {
    console.log(ref);
    this.ref = ref;
  }

  checkPosition() {
    // console.log(this.ref.getBoundingClientRect().top);
    // console.log(window.innerHeight);
    if (this.ref.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter');
    } else {
      console.log('exit');
    }
  }

  componentDidMount() {
    this.checkPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkPosition);
  }

  render() {
    return <div ref={this.setRef}>1</div>;
  }
}

export default ScrollSpy;
