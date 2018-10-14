import React from 'react'
import ProductListing from '../containers/ProductListing'
import NavBar from '../containers/NavBar'

class LandingPage extends React.Component {
    render() {
        return (
            <main>
                <div className="app-container">
                    <div className="app-top__menus">
                        <div className="search_box">
                            <input type="text" placeholder="Search..." />
                            <button>Search</button>
                        </div>

                        <div className="menu_view_type">
                            <button>Grid</button>
                            <button>List</button>
                        </div>
                    </div>

                    <ProductListing /> 
                </div>
            </main>
        )
    }
}

export default LandingPage;