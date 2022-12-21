import { legacy_createStore } from 'redux'

const reducerFn = (state = {
  loading: true,
  locations: [],
  searchTerm: '',
  favorites: []
}, action) => {
  return state
}
 
const store = legacy_createStore(reducerFn)

export default store