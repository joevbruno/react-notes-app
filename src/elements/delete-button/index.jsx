import React from "react";
import { Popconfirm, Icon } from "antd";
import PropTypes from 'prop-types';

export class DeleteButton extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    onConfirm: PropTypes.func
  };

  render() {
    const { onConfirm, className } = this.props;

    return (
      <Popconfirm
        title="Are you sure you want to delete this note?"
        onConfirm={onConfirm}
        okText="Yes"
        cancelText="No"
      >
        <Icon type="delete" theme="outlined" className={className} />
      </Popconfirm>
    );
  }
}
