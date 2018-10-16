import React from 'react';
import { DataLinker } from 'data/linker';
import { Search } from 'utilities/search';
import { NotesContainer } from '../pages';

export class NotesModule extends React.Component {
  render() {
    return (
      <DataLinker storeKey={'notes'}>
        {({ data, syncStore }) => (
          <Search data={data}>
            {({ query, matches, onSearch }) => (
              <NotesContainer
                query={query}
                notes={matches}
                onSearch={onSearch}
                syncStore={syncStore}
              />
            )}
          </Search>
        )}
      </DataLinker>
    );
  }
}
