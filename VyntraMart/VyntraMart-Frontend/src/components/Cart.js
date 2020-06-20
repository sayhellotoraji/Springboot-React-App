import React, { Component } from 'react'

import shirt from 'components/images/shirt.jpg'
import headphones from 'components/images/headphones.jpg'
import { Table }  from 'react-bootstrap'

import NavigationBar from 'components/NavigationBar';
import QuantityUpdater from 'components/CartComponent/QuantityUpdater'

import OrderSummary from 'components/Universal/OrderSummary'
import ItemQuantity from 'components/Universal/ItemQuantity'
import ProductInfo from 'components/Universal/ProductInfo'

import 'components/main.css'



export class Cart extends Component {
   
    
    render() {
        return (
<React.Fragment>

<NavigationBar />

    
<div className="row">
    <div className="col-lg-12">
        <div className="box-element">

            <a  className="btn btn-outline-dark" href="/">&#x2190; Continue Shopping</a>

            <br/>
            <br/>
            <Table className="table">
                <tr>
                    <OrderSummary></OrderSummary>
                    <th>
                        <a  style={{float: 'right', margin:'5px'  }} className="btn btn-success" href="checkout">Checkout</a>
                    </th>
                </tr>
            </Table>

        </div>

        <br />
        <div className="box-element">
            <div className="cart-row">
                <div style={{flex:2}}></div>
                <div style={{flex:2}}><strong>Item</strong></div>
                <div style={{flex:1}}><strong>Price</strong></div>
                <div style={{flex:1}}><strong>Quantity</strong></div>
                <div style={{flex:1}}><strong>Total</strong></div>
            </div>
            

            {/* {% for item in items %} */}

                    <div className="cart-row">
                        <ProductInfo></ProductInfo>
                        <QuantityUpdater></QuantityUpdater>
                        <ItemQuantity></ItemQuantity>

                    </div>
          
            {/* {% endfor %} */}

        </div>
    </div>
</div>

</React.Fragment>
        )
    }
}

export default Cart


