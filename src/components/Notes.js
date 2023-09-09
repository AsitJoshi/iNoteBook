import React, { useContext, useState,useEffect, useRef } from 'react';
import noteContext from '../context/notes/notesContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';


const Notes = (props) => {
  const context = useContext(noteContext);//storing all the states provided by the notesState
  const { notes, getNotes,editNote } = context;//desturcturing

  const [note,setNote] = useState({
    id:"",
    etitle:"",
    edescription:"",
    etag:"deafult"
  })

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, [])


  const ref = useRef(null);
  const refClose = useRef(null);

  const updateNote = (currNote) => {
    ref.current.click();
    setNote({id:currNote._id,etitle:currNote.title,edescription:currNote.description,etag:currNote.tag});
    

  }

 

  const handelClick = (e)=>{
    editNote(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();
    props.showAlert("Updated Successfully","success");
  }

  const onchange = (e)=>{
    setNote({...note,[e.target.name]:e.target.value})
    // ... is spread opt it allows ue to copy the existing array or obj into another array or obj
  }

  return (
    <>
      <AddNote showAlert={props.showAlert}/>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Tittle</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onchange} value={note.etitle} minLength={5} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" onChange={onchange} value={note.edescription} minLength={5} required/>
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" onChange={onchange} value={note.etag} minLength={5} required/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5&&note.edescription.length<5} type="button" className="btn btn-primary" onClick={handelClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your notes</h1>
        <div className="container">
          
         <h4><i> {notes.length===0 && 'NOTES HAI HI NHI AAPK KOISE'}</i></h4>{/*JAB ELSE ME KUCH NHI HOTA TO && KRKE 1st ME CONDN AUR 2nd ME JO RETURN KRNA HAI*/}
        </div>
        {notes.map((element) => {
          return <NoteItem key={element._id} note={element} updateNote={updateNote} showAlert={props.showAlert}/>;
        })}
      </div>
    </>
  )
}

export default Notes
