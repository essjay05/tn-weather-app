import { useParams } from "react-router-dom"
import Forecast from "../components/location/foreast.component"
import LocationHistory from "../components/location/location-history.component"
import CurrentWeather from "../components/location/current-weather.component"

export function Location({ locationName, pageTitle, loading }) {
  
  const locUrl = useParams()
  
  return (
    <div>
      <header className='App-header'>
        <h1>Trusted Nurses Weather App: Location</h1>
      </header>
      <main>
        <Forecast locationId={locUrl.id} />
        <CurrentWeather locationId={locUrl.id} />
        <LocationHistory locationId={locUrl.id} />
      </main>
    </div>
  )
}
