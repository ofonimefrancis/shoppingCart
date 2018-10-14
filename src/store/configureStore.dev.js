import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import DevTools from '../containers/DevTools'
import cartReducer from '../reducers/index'




const configureStore = preloadedState => {
  const store = createStore(
    combineReducers({
      cartReducer
    }),
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    )
  )
  return store
}

export default configureStore