import { useEffect, useState } from 'react'
import WeatherCondition from '../weather-condition/weather-condition'

const CurrentWeather = ({ loading, currentWeather }) => {

  const { temp_f, precip_in,  feelslike_f, last_updated, cloud } = {...currentWeather}
  const { icon, text } = {...currentWeather.condition}

  console.log('currentWeather')
  console.log(currentWeather)

  return (
    <div className='current-weather-container mx-auto'>
      <h2>CurrentWeather</h2>
      {loading && <h3>Loading...</h3>}
      {(!loading && currentWeather) && 
        <div className='current-weather-detail'>
          <p>Last updated: <em>{last_updated}</em></p>
          <WeatherCondition icon={icon} text={text} temp={temp_f}/>
          <ul>
            {precip_in > 0 && <li>Inches of precipitation: {precip_in}"</li>}
            <li>Feels like: {feelslike_f}&deg;F</li>
            <li>{cloud}% clouds</li>
          </ul>
        </div>}
    </div>
  )
}

export default CurrentWeather