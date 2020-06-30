import React, { Component } from 'react'

import { Table }  from 'react-bootstrap'

import QuantityUpdater from 'components/UserComponents/CartComponent/QuantityUpdater'

import OrderSummary from 'components/UserComponents/Universal/OrderSummary'
import ItemQuantity from 'components/UserComponents/Universal/ItemQuantity'
import ProductInfo from 'components/UserComponents/Universal/ProductInfo'

import 'components/static/css/main.css'



export class Cart extends Component {
   
    
    render() {
        return (
<React.Fragment>


    
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


