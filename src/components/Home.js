import React, { useContext } from 'react';
import noteContext from '../context/notes/notesContext';
import Notes from './Notes';
import AddNote from './AddNote';

const Home = () => {

  return (
    <div>
      <Notes />
    </div>
  )
}

export default Home
