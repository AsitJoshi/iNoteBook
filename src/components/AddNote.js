import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/notesContext';


const AddNote = () => {
  const context = useContext(noteContext);//storing all the states provided by the notesState
  const { addNote } = context;//desturcturing

  const [note,setNote] = useState({
    title:"",
    description:"",
    tag:"deafult"
  })

  const handelClick = (e)=>{
    e.preventDefault();
      addNote(note.title,note.description,note.tag);
  }

  const onchange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
    // ... is spread opt it allows ue to copy the existing array or obj into another array or obj
  }
  return (
    <div>
      <div className="container my-3">
        <h1>Add notes</h1>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Tittle</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onchange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" onChange={onchange}/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" onClick={handelClick} className="btn btn-primary">Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote
