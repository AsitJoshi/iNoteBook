import React,{ useContext, useEffect } from 'react';
import noteContext from '../context/notes/notesContext';

const About = () => {
  // const a = useContext(noteContext);//this imports all the state from notesContext to a var a
  // useEffect(()=>{
  //   a.update();
  //   // eslint-disable-next-line
  // },[]);
  return (
    <div>
      {/* <h1>this is about {a.state.name} class {a.state.class}</h1> */}
      <h1>this is about </h1>
    </div>
  )
}

export default About;
