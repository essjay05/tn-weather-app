import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Location } from './pages/Location'
import { Favorites } from './pages/Favorites';

import './App.css'
import NavBar from './components/navBar/navBar';

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path={`/locations/:id`} element={<Location />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </>
  );
}

export default App;
