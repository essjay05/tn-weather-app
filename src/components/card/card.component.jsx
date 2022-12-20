import './card.styles.css'

const Card = ({ id, title, className, link }) => {
  return (
    <div
      key={id}
      className={className}>
      <a href={link}>
        <h3>{title}</h3>
      </a>
    </div>
  )
}

export default Card