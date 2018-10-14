import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import '../App.css'

class NavBar extends Component {
    render() {
        return(
            <nav>
                <div className="nav__list">
                    <div>
                        <Link to={'/'}>Home</Link>
                    </div>

                    <div>
                        <Link to={'/'}>Top 5 Products</Link>
                    </div>

                    <div>
                        <Link to={'#'}>Cart</Link>
                        
                        <span className="cartCount">{this.props.cartItems.length}</span>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({
    cartItems: state.cartReducer.cartItems
})

export default connect(mapStateToProps, null)(NavBar);