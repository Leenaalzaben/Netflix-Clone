import './App.css';
import Home from './Components/Home';
import NavBar from './Components/Navbar';
import FavList from './Components/FavList';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (

    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FavList' element={<FavList />} />
      </Routes>
    </>
  );
}

export default App;
