/**
 * Data Linker
 */
import React from 'react';
import PropTypes from 'prop-types';
import { loadFromLocalStorage, saveToLocalStorage } from './helpers';

export class DataLinker extends React.Component {
  state = { data: [], error: false };

  static propTypes = {
    storeKey: PropTypes.string,
  };

  static defaultProps = {
    storeKey: 'notes',
  };

  componentDidMount() {
    const { storeKey } = this.props;
    return loadFromLocalStorage(storeKey)
      .then(data => this.setState({ data }))
      .catch(() => this.setState({ error: true }));
  }

  syncStore = data => {
    const { storeKey } = this.props;

    return saveToLocalStorage(storeKey, data)
      .then(data => this.setState({ data }))
      .catch(() => this.setState({ error: true }));
  };

  render() {
    const { data } = this.state;
    const { children: render } = this.props;

    return render({ data, syncStore: this.syncStore })
  }
}
