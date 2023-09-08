import React, { useState } from 'react'
import NoteContext from './notesContext'

const NoteState = (props) => {
  // const s1 = {
  //     name:"Asit",
  //     class:"5a"
  // }
  // const [state,setState] = useState(s1);
  // const update = ()=>{
  //     setTimeout(()=>{
  //         setState({
  //             name:"asit joshi",
  //             class:"12a"
  //         })
  //     },1000)
  // }
  //Provider attaches all values present in values tag to the context


  const host = "http://localhost:80";
  const intitialNotes=[];
  const [notes, setNotes] = useState(intitialNotes);


  //GET ALL NOTES
  const getNotes = async () => {
    //API CALL
    let url = `${host}/api/fetchallnotes`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYmZlMmZkMTM4ZTAzYzc4OWM3YjcwIn0sImlhdCI6MTY5MTgzMjcwN30.ZoaZv00LKSZ8oMn3hYPCaHfNgOPIQy3oD4J-Gd5Xi1g'
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  }


  //------------------------>Add a note
  const addNote = async (title, description, tag) => {
    //API CALL
    let url = `${host}/api/addnote`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYmZlMmZkMTM4ZTAzYzc4OWM3YjcwIn0sImlhdCI6MTY5MTgzMjcwN30.ZoaZv00LKSZ8oMn3hYPCaHfNgOPIQy3oD4J-Gd5Xi1g'
      },
      body: JSON.stringify({title,description,tag})
    });
    const json = await response.json();

    // // Logic to edit in client
    setNotes(notes.concat(json));
  }
  //edit a note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    let url = `${host}/api/updatenote/${id}`;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYmZlMmZkMTM4ZTAzYzc4OWM3YjcwIn0sImlhdCI6MTY5MTgzMjcwN30.ZoaZv00LKSZ8oMn3hYPCaHfNgOPIQy3oD4J-Gd5Xi1g'
      },
      body: JSON.stringify({title,description,tag})
    });
    const json = await response.json();
    //Logic to edit in client

    let newNote = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
         newNote[index].title = title;
         newNote[index].description = description;
         newNote[index].tag = tag;
         break;
      }
    }
    setNotes(newNote);
  }

  //delete a note
  const deleteNote = async (_id) => {
    //API CALL
    let url = `${host}/api/deletenote/${_id}`;
    const response = await fetch(url, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjYmZlMmZkMTM4ZTAzYzc4OWM3YjcwIn0sImlhdCI6MTY5MTgzMjcwN30.ZoaZv00LKSZ8oMn3hYPCaHfNgOPIQy3oD4J-Gd5Xi1g'
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);

    //LOGIC TO DELETE IN CLIENT
    console.log("deleting" + _id);
    const newNotes = notes.filter((element) => { return element._id !== _id });

    setNotes(newNotes);
  }


  return (
    // <NoteContext.Provider value={{state,update}}>
    //     {props.children}
    // </NoteContext.Provider>
    <NoteContext.Provider value={{ notes, addNote, deleteNote, getNotes, editNote }} >
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;