export function loadFromLocalStorage(storeKey) {
  return new Promise((resolve, reject) => {
    // if the key exists in localStorage
    if (localStorage.hasOwnProperty(storeKey)) {
      // get the key's value from localStorage
      let loadedNotes = localStorage.getItem(storeKey);

      // parse the localStorage string and setState
      try {
        return resolve(JSON.parse(loadedNotes));
      } catch (e) {
        console.log(e);
        return reject(e);
      }
    }

    return resolve([]);
  });
}

export function saveToLocalStorage(storeKey, notes) {
  return new Promise((resolve, reject) => {
    try {
      localStorage.setItem(storeKey, JSON.stringify(notes));
      return resolve(notes);
    } catch (e) {
      return reject(e);
    }
  });
}
