import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({ loading, locations }) => {
  return (
    <div className='card-list-conatiner'>
      <h2>CardList</h2>
      <div className='locations-list'>
        {
          locations.map((l) => {
            const { name, id, region, country, url } = l
            return (
              <Card
                key={id}
                className={'location-container'}
                title={`${name}, ${region}, ${country}`}
                link={`/locations/${url}`}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default CardList