import { useParams } from "react-router-dom"
import Forecast from "../components/location/forecast.component"
import LocationHistory from "../components/location/location-history"
import CurrentWeather from "../components/location/current-weather"

export function Location() {
  
  const locUrl = useParams()
  
  return (
    <div>
      <header className='App-header'>
        <h1>Trusted Nurses Weather App: Location</h1>
      </header>
      <main>
        <CurrentWeather locationId={locUrl.id} />
        <hr/>
        <Forecast locationId={locUrl.id} />
        <hr/>
        <LocationHistory locationId={locUrl.id} />
      </main>
    </div>
  )
}
