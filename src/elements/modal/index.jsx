import React from 'react';
import ResponsiveModal from 'react-responsive-modal';
import PropTypes from 'prop-types';

export class Modal extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    classNames: PropTypes.any,
    onClose: PropTypes.func,
  };

  render() {
    const { open, classNames, onClose, children } = this.props;

    return (
      <ResponsiveModal
        showCloseIcon={false}
        animationDuration={300}
        open={open}
        classNames={classNames}
        onClose={onClose}
      >
        {children}
      </ResponsiveModal>
    );
  }
}
