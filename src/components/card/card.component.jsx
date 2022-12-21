import './card.styles.css'
import { Link } from 'react-router-dom'

const Card = ({ id, title, className, link, detail }) => {
  return (
    <div
      key={id}
      className={className}>
      <Link to={link}>
        <h3>{title}</h3>
      </Link>
      {detail && <p>{detail}</p>}
    </div>
  )
}

export default Card