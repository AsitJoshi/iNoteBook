import React ,{useContext} from 'react';
import noteContext from '../context/notes/notesContext';
import NoteItem from './NoteItem';


const Notes = () => {
    const context = useContext(noteContext);//storing all the states provided by the notesState
    const {notes,setNotes} = context;//desturcturing
  return (
    <div className="row my-3">
    <h1>Your notes</h1>
    {notes.map((element)=>{
      return <NoteItem note={element}/>;
    })}
  </div>
  )
}

export default Notes
