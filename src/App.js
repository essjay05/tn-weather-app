import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { History } from './pages/History'
import { Location } from './pages/Location'

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

function App() {

  const defaultLocationString = '95116'

  const [loading, setIsLoading] = useState(true)
  const [locationResults, setLocationResults] = useState([])
  const [searchTerm, setSearchTerm] = useState(defaultLocationString)
  
  useEffect(() => {
    fetchSearchTermLocationWeather()
  }, [locationResults])

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
    <div className='App'>
      <header className='App-header'>
        <h1>Trusted Nurses Weather App</h1>
      </header>
      <SearchBox
        className={`location-search-term`}
        placeholder={`Search by Location`}
        onChangeHandler={onSearchChange}
        name={`searchTerm`}
        btnText={`Search Term`}
        onBtnClick={handleSearchClick}/>
      {loading && <h3>Loading...</h3>}
      {!loading && <CardList locations={locationResults}/>}
    </div>
  );
}

export default App;
