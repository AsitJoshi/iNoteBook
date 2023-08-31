import React, { useContext } from 'react';
import noteContext from '../context/notes/notesContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';


const Notes = () => {
  const context = useContext(noteContext);//storing all the states provided by the notesState
  const { notes, addNotes } = context;//desturcturing
  return (
    <>
      <AddNote/>
      <div className="row my-3">
        <h1>Your notes</h1>
        {notes.map((element) => {
          return <NoteItem key={element._id} note={element} />;
        })}
      </div>
    </>
  )
}

export default Notes
