import React from 'react';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export class Header extends React.Component {
  static propTypes = {
    query: PropTypes.string,
    onSearch: PropTypes.func,
  };

  render() {
    const { search, onSearch } = this.props;

    return (
      <header className={styles.header}>
        <h1 className={styles.logo}>Notes</h1>
        <input
          className={styles.search}
          type="search"
          placeholder="Search notes..."
          value={search}
          onChange={onSearch}
        />
      </header>
    );
  }
}
