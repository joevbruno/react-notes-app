import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css';
import styles from './styles.module.scss';
import { Note } from 'modules/notes';

const breakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  600: 1,
};

export class Notes extends React.Component {
  static propTypes = {
    notes: PropTypes.array,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
  }

  render() {
    const { notes, onDelete, onEdit } = this.props;

    const data =
      notes && Array.isArray(notes) && notes.length
        ? notes.map((note, key) => {
            const { id = key, title = '', content = '' } = note || {};
            return (
              <Note
                key={id}
                id={id}
                title={title}
                content={content}
                onDelete={onDelete.bind(this, id)}
                onEdit={onEdit.bind(this, id)}
              />
            );
          })
        : <p>{'No notes exist.'}</p>;

    return (
      <div className={styles.container}>
        <Masonry breakpointCols={breakpointColumns} className={styles.grid}>
          {data}
        </Masonry>
      </div>
    );
  }
}
