import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import history from '../history'
import LandingPage from '../components/LandingPage'


const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Route exact path="/" component={LandingPage} />    
            </div>
        </Router>
    </Provider>
  )
  
  Root.propTypes = {
    store: PropTypes.object.isRequired,
  }
  export default Root