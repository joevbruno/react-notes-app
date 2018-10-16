import React from 'react';
import PropTypes from 'prop-types';

export class Content extends React.Component {
  static propTypes = {
    containerClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    content: PropTypes.string,
    onClick: PropTypes.func
  };

  render() {
    const {
      containerClassName,
      contentClassName,
      content,
      onClick,
    } = this.props;

    return (
      <div className={containerClassName} onClick={onClick}>
        <p className={contentClassName}>{content}</p>
      </div>
    );
  }
}
