import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/notesContext';


const AddNote = () => {
  const context = useContext(noteContext);//storing all the states provided by the notesState
  const { addNote } = context;//desturcturing

  const [note,setNote] = useState({
    title:"",
    description:"",
    tag:""
  })

  const handelClick = (e)=>{
    e.preventDefault();
      addNote(note.title,note.description,note.tag);
      setNote({
        title:"",
        description:"",
        tag:""
      })//clearing fields after adding
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
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onchange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onchange} minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onchange}/>
          </div>
          <button disabled={note.title.length<5&&note.description.length<5} type="submit" onClick={handelClick} className="btn btn-primary">Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNote
