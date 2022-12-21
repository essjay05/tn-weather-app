import './card-list.styles.css'
import Card from '../card/card'

const CardList = ({ loading, locations, favBtn }) => {
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
                link={`/locations/${url}`}
                favBtn={favBtn}
                id={id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default CardList