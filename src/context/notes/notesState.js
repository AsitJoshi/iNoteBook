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

  const intitialNotes = [
    {
      "_id": "64sdvd8bcdaca19ecc2sdvsbb7448ed",
      "userId": "64cbfe2fd138e03c789c7b70",
      "title": "My title",
      "description": "My description",
      "tag": "personal",
      "date": "2023-08-13T11:22:02.314Z",
      "__v": 0
    },
    {
      "_id": "64d8bcdaca19ecsdvsc2sdvbb7448ed",
      "userId": "64cbfe2fd138e03c789c7b70",
      "title": "My title",
      "description": "My description",
      "tag": "personal",
      "date": "2023-08-13T11:22:02.314Z",
      "__v": 0
    },
    {
      "_id": "64d8bcdasdvvsdca19ecc2bb7448ed",
      "userId": "64cbfe2fd138e03c789c7b70",
      "title": "My title",
      "description": "My description",
      "tag": "personal",
      "date": "2023-08-13T11:22:02.314Z",
      "__v": 0
    },
    {
      "_id": "64d8bcdsvdaca19ecc2bb7448ed",
      "userId": "64cbfe2fd138e03c789c7b70",
      "title": "My title",
      "description": "My description",
      "tag": "personal",
      "date": "2023-08-13T11:22:02.314Z",
      "__v": 0
    },
    {
      "_id": "64d8bcdaca19esdvsdcc2bb7448ed",
      "userId": "64cbfe2fd138e03c789c7b70",
      "title": "My title",
      "description": "My description",
      "tag": "personal",
      "date": "2023-08-13T11:22:02.314Z",
      "__v": 0
    },
    {
      "_id": "64d8bcdsvsdaca19ecc2bb7448ed",
      "userId": "64cbfe2fd138e03c789c7b70",
      "title": "My title",
      "description": "My description",
      "tag": "personal",
      "date": "2023-08-13T11:22:02.314Z",
      "__v": 0
    },
    {
      "_id": "64d8bcdaca19ecc2sdvsbb7448ed",
      "userId": "64cbfe2fd138e03c789c7b70",
      "title": "My title",
      "description": "My description",
      "tag": "personal",
      "date": "2023-08-13T11:22:02.314Z",
      "__v": 0
    },
    {
      "_id": "64d8bcdaca1cdv9ecc2bb7448ed",
      "userId": "64cbfe2fd138e03c789c7b70",
      "title": "My title",
      "description": "My description",
      "tag": "personal",
      "date": "2023-08-13T11:22:02.314Z",
      "__v": 0
    },
    {
      "_id": "64d8bcdaca19zecc2bb7448ef",
      "userId": "64cbfe2fd138e03c789c7b70",
      "title": "My title",
      "description": "My description",
      "tag": "personal",
      "date": "2023-08-13T11:22:02.732Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(intitialNotes);

  //Add a note
  const addNote = (title, desc, tag) => {

    let note = {
      "_id": "64d8bcdaca19zecc2bb7448ef",
      "userId": "64cbfe2fd138e03c789c7b70",
      "title": title,
      "description": desc,
      "tag": tag,
      "date": "2023-08-13T11:22:02.732Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }
  //edit a note
  const editNote = () => {

  }

  //delete a note
  const deleteNote = (_id) => {
    console.log("deleting" + _id);
   const newNotes = notes.filter((element)=>{return element._id!==_id});

    setNotes(newNotes);
  }


  return (
    // <NoteContext.Provider value={{state,update}}>
    //     {props.children}
    // </NoteContext.Provider>
    <NoteContext.Provider value={{ notes, addNote, deleteNote }} >
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;