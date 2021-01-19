import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Toast from '../../../doit-ui/Toast';

class Notification extends PureComponent {
  render() {
    const { showMessage, message, warning } = this.props;
    return showMessage && <Toast message={message} warning={warning}></Toast>;
  }
}

Notification.propTypes = {
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Notification;
