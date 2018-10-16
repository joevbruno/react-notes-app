/**
 * Editable Note
 */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { TextArea, Input } from 'elements';

export class Editable extends React.Component {
  state = {
    id: '',
    title: 'Title',
    content: 'Description',
  };

  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    onSave: PropTypes.func
  };

  static getDerivedStateFromProps(props, state) {
    const { id, title, content } = props;

    if (state.id) {
      return {
        id,
        title,
        content,
        ...state,
      }
    }

    return {
      id,
      title,
      content,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.onSave();
    }
  };

  onChange = propertyName => e => {
    const { target } = e || {};
    const { value = '' } = target || {};
    const nextState = { [propertyName]: value };

    this.setState(nextState);
  };

  onSave = () => {
    const { id, content, title } = this.state;
    const { onSave } = this.props;

    onSave({ id, title, content });
  };

  render() {
    const { id, title, content } = this.state;

    return (
      <div ref={node => (this.wrapperRef = node)}>
        <Input
          style={{ display: id ? 'block' : 'none' }}
          className={styles['title-input']}
          placeholder="Title"
          value={title}
          onChange={this.onChange('title')}
        />
        <TextArea
          className={styles.textarea}
          value={content}
          placeholder="Note"
          onChange={this.onChange('content')}
        />
      </div>
    );
  }
}
