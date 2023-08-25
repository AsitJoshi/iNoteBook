import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/notesState';



function App() {
  //i will wrap every component into notesstate so all the state will be available in every compo.
  return (
    <>
    <NoteState>
    <Router>
    <Navbar />
    <div className="container">

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
