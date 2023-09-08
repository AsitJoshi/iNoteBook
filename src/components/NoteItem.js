import React,{ useContext } from 'react';
import noteContext from '../context/notes/notesContext';

const NoteItem = (props) => {
    const { note , updateNote} = props;
    const context = useContext(noteContext)
    const {deleteNote} = context;

    

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                    <h5 className="card-title">{note.title}</h5>
                    <div className="d-flex">
                    <i className="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}} ></i>
                    <i className="fa-solid fa-pen-to-square fa-flip mx-2" onClick={()=>{updateNote(note)}}></i>

                    </div>

                    </div>
                    <p className="card-text">{note.description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default NoteItem;
