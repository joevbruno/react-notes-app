import React from 'react';
import PropTypes from 'prop-types';

export class Title extends React.Component {
  static propTypes = {
    titleClassName: PropTypes.string,
    title: PropTypes.string,
    onClick: PropTypes.func,
  };

  render() {
    const { titleClassName, title, onClick } = this.props;

    return (
      <h3 className={titleClassName} onClick={onClick}>
        {title}
      </h3>
    );
  }
}
