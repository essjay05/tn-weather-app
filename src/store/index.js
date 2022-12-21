import { legacy_createStore } from 'redux'

const reducerFn = (state = {
  searchTerm: '95116',
  faveCities: []
}, action) => {
  return state
}
 
const store = legacy_createStore(reducerFn)

export default store