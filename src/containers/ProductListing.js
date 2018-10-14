import React, {Component} from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import {Link} from "react-router-dom"
import config from '../config/index'
import { addItemToCart} from '../actions';
import {updateCartState} from '../actions/index'

class ProductListing extends Component {
    constructor() {
        super()
        
        this.state = {
            products: []
        }
        this.addProductToCart = this.addProductToCart.bind(this);
    }

    addProductToCart = (product) => {
       this.props.addToCart(product)
    }
    
    componentWillMount() {
        let url = config.API_URL;
        axios.get(url)
            .then(res => this.setState({products: res.data.products}))
    }

    render() {
        if(!this.state.products) return( <div>Loading Products...</div>)
        let productListing = this.state.products.map(product => {
            return (
                <div className="product" key={product.productID}>
                    <Link className="grid_item" to={'#'}>
                        <img alt="" src={product.image} className="rounded-sm" />
                    </Link>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <span className="menu-add addProduct" onClick={() => this.addProductToCart(product)}>+</span>
                </div>
            )
        })

        return(
            <div className="list_container container">
                 <div className="grid">
                    {productListing}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    cartItems: state.cartItems
})

const mapDispatchToProps = dispatch => ({
 addToCart: item => {
    dispatch(addItemToCart(item))
    dispatch(updateCartState(item))
 },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
