import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import configureStore from './store/configureStore'
import Root from './containers/Root'
import {updateCartState} from './actions/index'

let store = configureStore()
let cartItems = localStorage.getItem('cartItems')
if(cartItems) {
  let products = JSON.parse(cartItems)
  products.map((item) => {
    store.dispatch(updateCartState(item))
  })
}


render(
    <Router>
      <Root store={store} />
    </Router>,
    document.getElementById('root')
  )
  
serviceWorker.unregister();
