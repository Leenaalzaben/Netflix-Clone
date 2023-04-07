import './App.css';
import Home from './Components /Home'
import NavBar from './Components /Navbar';
import Movie from './Components /Movie'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <>
    <NavBar/>
      <Routes>

      <Route path='/' element={<Home />}/>
      {/* <Route path='/trending' element={<Movie/>}/> */}




      </Routes>
    </>
  );
}

export default App;
