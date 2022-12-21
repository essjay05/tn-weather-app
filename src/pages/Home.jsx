import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardList from '../components/card-list/card-list'
import SearchBox from '../components/search-box/search-box'

export function Home() {

  const defaultLocationString = '95116'

  const [loading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState(defaultLocationString)
  const [locationResults, setLocationResults] = useState([])
  
  useEffect(() => {
    fetchSearchTermLocationWeather()
  }, [])

  const fetchSearchTermLocationWeather = () => {
    fetch(`http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_TN_WEATHER_APP_KEY}&q=${searchTerm}`)
      .then((response) => response.json())
      .then((locations) => setLocationResults(locations))
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err))
  }

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

  return (
    <>
      <header className='App-header'>
        <h1>Trusted Nurses Weather App: Home</h1>
      </header>
      <main>
      <SearchBox
        className={`location-search-term`}
        placeholder={`Search by Location`}
        onChangeHandler={onSearchChange}
        name={`searchTerm`}
        btnText={`Search Term`}
        onBtnClick={handleSearchClick}
        searchTerm={searchTerm}/>
        <CardList 
          loading={loading}
          locations={locationResults}
          favBtn={true} />
      </main>
    </>
  )
}
