import React from 'react'
import { useSelector } from 'react-redux'
import CardList from '../components/card-list/card-list.component'
import SearchBox from '../components/search-box/search-box.component'

export function Home({ locationResults, loading, searchTerm, onSearchChange, handleSearchClick }) {

  // const [loading, setIsLoading] = useState(true)

  return (
    <>
      <header className='App-header'>
        <h1>Trusted Nurses Weather App: Home</h1>
      </header>
      <main>
      <SearchBox
        className={`location-search-term`}
        placeholder={`Search by Location`}
        onChangeHandler={onSearchChange}
        name={`searchTerm`}
        btnText={`Search Term`}
        onBtnClick={handleSearchClick}
        searchTerm={searchTerm}/>
        <CardList 
          loading={loading}
          locations={locationResults} />
      </main>
    </>
  )
}
