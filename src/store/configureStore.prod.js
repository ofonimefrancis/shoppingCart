import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import cartReducer from '../reducers/index'

const configureStore = preloadedState => createStore(
  cartReducer,
  preloadedState,
  applyMiddleware(thunk)
)

export default configureStore