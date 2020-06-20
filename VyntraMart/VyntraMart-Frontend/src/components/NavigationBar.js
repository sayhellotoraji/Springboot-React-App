import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import 'components/main.css'

import cart from 'components/assets/cart.png'
import { Helmet } from 'react-helmet'



function NavigationBar() {
    
    
    return (

        <Navbar expand="lg" bg="dark">
           
            {/*Replace #home with {% url 'store' %} */}
            <Navbar.Brand style={{color: 'hsl(0, 0%, 98%)'}} href="#home">Vyntra Mart</Navbar.Brand>

            

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link" style={{color: 'hsl(0, 0%, 98%)'}} href="">Store <span className="sr-only">(current)</span></a>
                    </li>
                    
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <a href="#"className="btn btn-warning">Login</a>
                    
                    <a href="cart">
                    <img  id="cart-icon" src={cart} />
                    </a>
                    <p id="cart-total">0</p>
        
                </div>
            </div>

        </Navbar>
        
        
    )
}

export default NavigationBar
