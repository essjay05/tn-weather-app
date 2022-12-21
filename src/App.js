import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Location } from './pages/Location'
import { Favorites } from './pages/Favorites';

import './App.css'
import NavBar from './components/navBar/navBar.component';

function App() {

  const defaultLocationString = '95116'

  const [loading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState(defaultLocationString)
  const [locationResults, setLocationResults] = useState([])
  const locations = useSelector((state) => state.locations)
  const dispatch = useDispatch()



  useEffect(() => {
    fetchSearchTermLocationWeather()
  }, [])

  const onSearchChange = (event) => {
    const searchTermString = event.target.value.toLowerCase()
    if (searchTermString) {
      setSearchTerm(searchTermString)
    } else {
      setSearchTerm(defaultLocationString)
    }
  }

  const handleSearchClick = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_TN_WEATHER_APP_KEY}&q=${searchTerm}`, {
        method: 'GET',
        headers: {
          ACCEPT: 'application/json'
        }
      })

      if (!response.ok) { throw new Error(`Error! status: ${response.status}`) }
   
      const result = await response.json()
      console.log(`result is: ${JSON.stringify(result, null, 4)}`)
    
      setLocationResults(result)
    } catch (err) {
      console.error(err.message)
    } finally {
      setIsLoading(false)
    }

  }

  const fetchSearchTermLocationWeather = () => {
    fetch(`http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_TN_WEATHER_APP_KEY}&q=${searchTerm}`)
      .then((response) => response.json())
      .then((locations) => setLocationResults(locations))
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err))
  }

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={
          <Home 
            locationResults={locationResults} 
            loading={loading} 
            onSearchChange={onSearchChange} 
            handleSearchClick={handleSearchClick}
            searchTerm={searchTerm}/>
        }/>
        <Route path={`/locations/:id`} element={<Location />}/>
        <Route path='/favorites' element={<Favorites />}/>
      </Routes>
    </>
  );
}

export default App;
