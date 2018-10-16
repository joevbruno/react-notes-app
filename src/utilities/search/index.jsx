import React from 'react';
import PropTypes from 'prop-types';
import { getSearchableEntities } from './helpers';

export class Search extends React.Component {
  state = {
    query: '',
  };

  static defaultProps = {
    data: PropTypes.array,
    searchOptions: PropTypes.any,
  }

  static getDerivedStateFromProps(props) {
    const { data, searchOptions } = props;
    const queryable = getSearchableEntities(data, searchOptions);

    return { queryable }
  }

  onSearchChange = e => {
    const { target } = e || {};
    const { value: query = '' } = target || {};

    this.setState({ query });
  };

  render() {
    const { query, queryable } = this.state;
    const { children: render, data } = this.props;

    const filtered = query ? queryable.search(query) : data;

    return render({ query, matches: filtered, onSearch: this.onSearchChange });
  }
}
