/**
 * Actions
 */
import short from 'short-uuid';

export function onCreate(notes, note) {
  const prev = Array.isArray(notes) && notes.length ? notes : [];
  const { title = '', content = '' } = note || {};

  if (!title || !content) {
    return prev;
  }

  return [
    ...prev,
    {
      title,
      content,
      id: short.uuid(),
    },
  ];
}

export function onUpdate(notes, note) {
  const { id = '', content = '', title = '' } = note || {};
  const prev = Array.isArray(notes) && notes.length ? notes : null;

  if (!id || !title || !content) {
    return prev || [];
  }
  return prev
    ? notes.map(
        currentNote =>
          currentNote && currentNote.id && currentNote.id === note.id
            ? note
            : currentNote,
      )
    : [note];
}

export function onDelete(notes, note) {
  const { id = '' } = note || {};

  return notes.filter(note => note && note.id && note.id !== id);
}
