import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import Forecast from "../components/location/forecast"
import LocationHistory from "../components/location/location-history"
import CurrentWeather from "../components/location/current-weather"

export function Location() {
  
  const locUrl = useParams()

  const weatherAlerts = 'no'
  const airQuality = 'no'

  const numOfDays = useSelector((state) => state.forecastedDays)
  const [loading, setIsLoading] = useState(true)
  const [locWeather, setLocWeather] = useState({})
  
  const { current, forecast, location } = locWeather 
  const { name, region, country, localtime } = { ...locWeather.location}

  const fetchLocationWeather = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_TN_WEATHER_APP_KEY}&q=${locUrl.id}&days=${numOfDays}&aqi=${airQuality}&alerts=${weatherAlerts}`)
      .then((response) => response.json())
      .then((res) => setLocWeather({...res}))
      .then(() => setIsLoading(false))
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetchLocationWeather()
  }, [])
  
  return (
    <div>
      <header className='App-header mb-5'>
        <h1>Trusted Nurses Weather App: Location</h1>
      </header>
      {(loading || !locWeather) && <h2>Location is loading...</h2>}
      {(!loading && locWeather) &&
        <main className='location-pg-body'>
          <h2 className='text-center'>{name}, {region}, {country}</h2>
          <h3 className='text-center mb-5'>{localtime}</h3>
          <CurrentWeather
            locationId={locUrl.id}
            currentWeather={current}
            loading={loading}
            location={location} />
          <hr/>
          <Forecast
            locationId={locUrl.id}
            weatherForecast={forecast}
            loading={loading} />
          <hr/>
          {/* <LocationHistory locationId={locUrl.id} /> */}
        </main>}
    </div>
  )
}
