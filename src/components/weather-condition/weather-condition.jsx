import ('./weather-condition.styles.css')

const WeatherCondition = ({ icon, text, temp }) => {
  return (
    <div className='curr-weather-condition'>
      <div className='weather-icon-container'>
        <img className='weather-icon' src={icon} alt={`${icon} weather icon`}/>
      </div>
      <p className='avg-temp'>{temp}&deg;F</p>
      <p className='text-center'>Weather condition is {text}</p>
    </div>
  )
}

export default WeatherCondition