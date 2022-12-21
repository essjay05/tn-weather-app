import { useEffect, useState } from 'react'

const CurrentWeather = ({ locationId }) => {

  const [loading, setIsLoading] = useState(true)
  const [weatherNow, setWeatherNow] = useState({
    locationName: null,
    locationRegion: null,
    locationCountry: null,
    locationLocalTime: null,
    currentTempC: null,
    currentTempF: null,
    currentCloud: null
  })

 const { locationName, locationRegion, locationCountry, locationLocalTime, currentTempC, currentTempF, currentCloud } = weatherNow

  const fetchCurrentWeather = (searchTerm) => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_TN_WEATHER_APP_KEY}&q=${searchTerm}`)
      .then((response) => response.json())
      .then((weather) => setWeatherNow({
        locationName: weather.location.name,
        locationRegion: weather.location.region,
        locationCountry: weather.location.country,
        locationLocalTime: weather.location.localtime,
        currentTempC: weather.current.temp_c,
        currentTempF: weather.current.temp_f,
        currentCloud: weather.current.cloud
      }))
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetchCurrentWeather(locationId)
  }, [])

  return (
    <div className='current-weather-container'>
      <h2>CurrentWeather</h2>
      {loading && <h3>Loading...</h3>}
      {(!loading && weatherNow) && 
        <div className='current-weather-detail'>
          <h4>{locationName}, {locationRegion}, {locationCountry}</h4>
          <p>{locationLocalTime}</p>
          <ul>
            <li>{currentTempC} degrees Celsius / {currentTempF} degrees Fahrenheit</li>
            <li>{currentCloud}% clouds</li>
          </ul>
        </div>}
    </div>
  )
}

export default CurrentWeather