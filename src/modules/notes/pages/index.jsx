import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Modal, Header } from 'elements';
import { Notes, Editable } from 'modules/notes';
import * as actions from '../actions';
import { getNote } from './helpers';

const NEW = 'new';

export class NotesContainer extends React.Component {
  state = {
    noteId: null,
  };

  static propTypes = {
    query: PropTypes.string,
    notes: PropTypes.array,
    onSearch: PropTypes.func,
    syncStore: PropTypes.func,
  };

  onEdit = (noteId = NEW) => {
    this.setState({ noteId });
  };

  onSave = note => {
    const { notes, syncStore } = this.props;
    const { id = NEW } = note || {};

    if (id === NEW) {
      const next = actions.onCreate(notes, note);
      return syncStore(next);
    }

    return syncStore(actions.onUpdate(notes, note));
  };

  onDelete = noteId => {
    const { notes, syncStore } = this.props;
    const next = actions.onDelete(notes, { id: noteId });

    syncStore(next);
  };

  onClose = () => {
    this.setState({ noteId: null });
  };

  renderHeader = () => {
    const { query, onSearch } = this.props;

    return (
      <Header search={query} onSearch={onSearch}>
        {this.renderNew()}
      </Header>
    );
  };

  renderModal = () => {
    const { noteId } = this.state;
    const { notes } = this.props;
    const { id, title, content } = getNote(notes, noteId);

    return (
      <Modal
        open={!!noteId}
        onClose={this.onClose}
        classNames={{ modal: styles.modal, overlay: styles.overlay }}
      >
        <Editable
          id={id}
          title={title}
          content={content}
          onSave={this.onSave}
        />
      </Modal>
    );
  };

  renderNotes = () => {
    const { notes } = this.props;

    return (
      <Notes notes={notes} onDelete={this.onDelete} onEdit={this.onEdit} />
    );
  };

  renderNew() {
    return <button className={'new-note'} onClick={this.onEdit.bind(this, 'new')}>NEW</button>;
  }

  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderNotes()}
        {this.renderModal()}
      </div>
    );
  }
}
