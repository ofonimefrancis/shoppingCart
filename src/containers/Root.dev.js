import React from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Router, Route , Switch} from 'react-router-dom'
import history from '../history'


import LandingPage from '../components/LandingPage'
import NavBar from './NavBar'
import '../App.css'

const Root = ({ store }) => (
    <Provider store={store}>
      <Router history={history}>
        <main>
          <NavBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
          <DevTools />
        </main>
      </Router>
    </Provider>
  )

  export default Root