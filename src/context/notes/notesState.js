import React, { useState } from 'react'
import NoteContext from './notesContext'

const NoteState = (props)=>{
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
          "_id": "64d8bcdaca19ecc2bb7448ed",
          "userId": "64cbfe2fd138e03c789c7b70",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-08-13T11:22:02.314Z",
          "__v": 0
        },
        {
          "_id": "64d8bcdaca19ecc2bb7448ed",
          "userId": "64cbfe2fd138e03c789c7b70",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-08-13T11:22:02.314Z",
          "__v": 0
        },
        {
          "_id": "64d8bcdaca19ecc2bb7448ed",
          "userId": "64cbfe2fd138e03c789c7b70",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-08-13T11:22:02.314Z",
          "__v": 0
        },
        {
          "_id": "64d8bcdaca19ecc2bb7448ed",
          "userId": "64cbfe2fd138e03c789c7b70",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-08-13T11:22:02.314Z",
          "__v": 0
        },
        {
          "_id": "64d8bcdaca19ecc2bb7448ed",
          "userId": "64cbfe2fd138e03c789c7b70",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-08-13T11:22:02.314Z",
          "__v": 0
        },
        {
          "_id": "64d8bcdaca19ecc2bb7448ed",
          "userId": "64cbfe2fd138e03c789c7b70",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-08-13T11:22:02.314Z",
          "__v": 0
        },
        {
          "_id": "64d8bcdaca19ecc2bb7448ed",
          "userId": "64cbfe2fd138e03c789c7b70",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-08-13T11:22:02.314Z",
          "__v": 0
        },
        {
          "_id": "64d8bcdaca19ecc2bb7448ed",
          "userId": "64cbfe2fd138e03c789c7b70",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-08-13T11:22:02.314Z",
          "__v": 0
        },
        {
          "_id": "64d8bcdaca19ecc2bb7448ef",
          "userId": "64cbfe2fd138e03c789c7b70",
          "title": "My title",
          "description": "My description",
          "tag": "personal",
          "date": "2023-08-13T11:22:02.732Z",
          "__v": 0
        }
      ]
      const [notes,setNotes] = useState(intitialNotes);
    return(
        // <NoteContext.Provider value={{state,update}}>
        //     {props.children}
        // </NoteContext.Provider>
        <NoteContext.Provider value={{notes,setNotes}} >
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;