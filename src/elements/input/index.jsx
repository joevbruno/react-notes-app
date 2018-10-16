import React from 'react';
import PropTypes from 'prop-types';

export class Input extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  render() {
    const { className, placeholder, value, onChange } = this.props;

    return (
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
}
