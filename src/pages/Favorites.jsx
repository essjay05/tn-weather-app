import { CardList } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'

export function Favorites() {
  const favorites = useSelector((state) => state.favorites)
  const dispatch = useDispatch()


  return (
    <div>
      <header className='App-header'>
        <h1>Trusted Nurses Weather App: Favorites</h1>
      </header>
      <main>
        <CardList faveBtn={true} />
      </main>
    </div>
  )
}
