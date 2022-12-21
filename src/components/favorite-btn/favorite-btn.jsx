import { useState } from 'react'
import { Heart, HeartFill } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'

const FavoriteBtn = ({ className }) => {

  
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFaveStatus = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <>
      {isFavorite && <HeartFill 
        onClick={toggleFaveStatus}
        className={`fave-btn clickable-icon ${className}`}
        color={'#d63031'}
        size={'1.5rem'}
        title={'Add Favorite'}
        aria-label='Add Favorite'/>}
      {!isFavorite &&<Heart
        onClick={toggleFaveStatus}
        className={`fave-btn clickable-icon ${className}`}
        color={'#d63031'}
        size={'1.5rem'}
        title={'Remove Favorite'}
        aria-label='Remove Favorite'/>}
    </>
  )
}

export default FavoriteBtn