import WeatherCondition from '../weather-condition/weather-condition'

const Forecast = ({ weatherForecast, loading }) => {
  
  const forecast = weatherForecast.forecastday
  
  return (
    <div className='forecast-container my-2'>
      <h2 className='text-center'>Forecast</h2>
      {loading && <h3 className='text-center'>Loading...</h3>}
      {(!loading && weatherForecast) && 
      <div className='forecast-list-container row d-flex flex-wrap space-between'>
        {forecast.map((d) => {
          const { date, astro, day } = d
          const { sunrise, sunset } = astro
          const { avgtemp_f, maxtemp_f, mintemp_f, condition, totalprecip_in } = day
          return (
            <div className='forecast-day-container col'>
              <h4 className='text-center'>{date}</h4>
              <WeatherCondition icon={condition.icon} text={condition.text} temp={avgtemp_f}/>
              <div className='forecast-details'>
                <ul>
                  <li>Sunrise: {sunrise}</li>
                  <li>Sunset: {sunset}</li>
                  <li>Temperature high: {maxtemp_f}&deg;F</li>
                  <li>Temperature low: {mintemp_f}&deg;F</li>
                  {totalprecip_in > 0 && 
                    <li>Total Precipitation: {totalprecip_in}"</li>}
                </ul>
              </div>
            </div>
          )
        })}
      
      </div>}
    </div>
  )
}

export default Forecast