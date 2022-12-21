import './card.styles.css'
import { Link } from 'react-router-dom'
import FavoriteBtn from '../favorite-btn/favorite-btn'

const Card = ({ id, title, className, link, detail, favBtn, isFave }) => {
  return (
    <div
      key={id}
      className={className}>
      <Link to={link}>
        <h3>{title}</h3>
      </Link>
      {favBtn &&
        <FavoriteBtn 
          id={id}
          isFave={isFave}/>}
      {detail && <p>{detail}</p>}
    </div>
  )
}

export default Card
