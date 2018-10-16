import React from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import styles from './styles.module.scss';

import {
  Title,
  Content,
  DeleteButton,
  EditButton,
} from 'elements';

export class Note extends React.Component {

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func
  };

  onEdit = () => {
    const { id, onEdit } = this.props;

    onEdit(id);
  };

  onDelete = () => {
    const { onDelete } = this.props;

    message.success('Note deleted', 1.5);
    onDelete();
  };

  renderNote = () => {
    const { title, content } = this.props;

    return (
      <React.Fragment>
        <Title
          titleClassName={styles['note-title']}
          title={title}
          onClick={this.onEdit}
        />
        <Content
          containerClassName={styles['note-content-container']}
          contentClassName={styles['note-content']}
          content={content}
          onClick={this.onEdit}
        />
      </React.Fragment>
    );
  };

  renderButtons = () => {
    return (
      <div className={styles['button-container']}>
        <DeleteButton
          onConfirm={this.onDelete}
          iconClassName={styles['delete-icon']}
        />
        <EditButton
          onClick={this.onEdit}
          buttonClassName={styles.button}
          iconClassName={styles['edit-icon']}
        />
      </div>
    );
  };

  render() {
    return (
      <div className={styles.container}>
        {this.renderNote()}
        {this.renderButtons()}
      </div>
    );
  }
}
