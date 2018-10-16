/**
 * helpers
 */

export function getNote(notes, noteId) {
    const note = Array.isArray(notes) && notes.length ? notes.find(note => note.id === noteId) : {};
    const { id = 'new', title = '', content = '' } = note || {};

    return { id, title, content }
}