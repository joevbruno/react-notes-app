/**
 * Search Helpers
 */

import Fuse from 'fuse.js';

const defaultOptions = {
    findAllMatches: false,
    keys: ['title', 'content'],
    matchAllTokens: true,
    tokenize: true,
  };

export function getSearchableEntities(notes, options = defaultOptions) {
  // Create a new Fuse object (search filter) with the corresponding options, then return
  // the Fuse object to be used in searching.

  return new Fuse(notes || [], options);
}
