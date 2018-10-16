import React from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

export class EditButton extends React.Component {
  static propTypes = {
    buttonClassName: PropTypes.string,
    iconClassName: PropTypes.string,
    onClick: PropTypes.func,
  };

  render() {
    const { buttonClassName, iconClassName, onClick } = this.props;

    return (
      <button className={buttonClassName} onClick={onClick} style={{ marginLeft: '16px'}}>
        <Icon className={iconClassName} type="edit" theme="outlined" />
      </button>
    );
  }
}
