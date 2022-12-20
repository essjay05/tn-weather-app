import './search-box.styles.css'

const SearchBox = ({ className, placeholder, onChangeHandler, name, btnText, onBtnClick }) => {
  return (
    <div className={`search-box-container ${name}`}>
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
        name={name}/>
      <button 
        className={`search-box-btn ${className}`}
        onClick={onBtnClick}>
        {btnText}
      </button>
    </div>
  )
}

export default SearchBox