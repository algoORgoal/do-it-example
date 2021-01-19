import React, { PureComponent } from 'react';
import loader from 'sass-loader';
import Text from '../doit-ui/Text';

class AsyncComponent extends PureComponent {
  componentDidMount() {
    const { loader } = this.props;
    loader().then(({ default: Component }) => {
      this.Component = Component;
      this.forceUpdate();
    });
  }

  render() {
    const { loader, ...otherProps } = this.props;
    const Component = this.Component;

    return Component ? (
      <Component {...otherProps} />
    ) : (
      <Text secondary large>
        로딩 중...
      </Text>
    );
  }
}

AsyncComponent.propTypes = {};

export default AsyncComponent;
