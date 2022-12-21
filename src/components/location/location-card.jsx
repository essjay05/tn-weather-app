import Card from "../card/card"
import { useSelector, useDispatch } from "react-redux"

const LocationCard = ({ id, className, locationName, url, favBtn }) => {
  
  return (
    <Card
      key={id}
      className={className}
      link={url}
      title={locationName}
      isFave={isFave}/>
  )
}

export default LocationCard