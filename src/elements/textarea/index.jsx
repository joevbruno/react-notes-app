import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import PropTypes from 'prop-types';

export class TextArea extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
  };

  render() {
    const { className, value, placeholder, onChange } = this.props;

    return (
      <TextareaAutosize
        className={className}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}
