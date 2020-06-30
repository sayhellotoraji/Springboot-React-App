

import ShippingInfo from 'components/UserComponents/CheckoutComponent/ShippingInfo'
import Payment from 'components/UserComponents/CheckoutComponent/Payment'

import OrderSummary from 'components/UserComponents/Universal/OrderSummary'
import ItemQuantity from 'components/UserComponents/Universal/ItemQuantity'
import ProductInfo from 'components/UserComponents/Universal/ProductInfo'

import { Table } from 'react-bootstrap'
import 'components/static/css/main.css'

import React, { Component } from 'react'

export class Checkout extends Component {


    render() {
        return (
<React.Fragment>

<div className="row">

    <div className="col-lg-6">
        <div className="box-element" id="form-wrapper">
            <ShippingInfo />
        </div>

        <br />
        <Payment />
        
    </div>

    <div className="col-lg-6">
        <div className="box-element">
            <a className="btn btn-outline-dark" href="/user/cart">&#x2190; Back to Cart</a>
            <hr />
            <h3>Order Summary</h3>
            
            

            <Table>
                <tr>
            <OrderSummary></OrderSummary>
            </tr>
            </Table>
            <hr/>
            
            <div className="cart-row">
                <ProductInfo></ProductInfo>
                <ItemQuantity></ItemQuantity>
            </div>
            
            
            
        </div>
    </div>
</div>
</React.Fragment>
        )
    }
}

export default Checkout
