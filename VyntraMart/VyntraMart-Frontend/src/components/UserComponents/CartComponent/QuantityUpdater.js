
import arrowdown from 'components/static/assets/arrow-down.png'
import arrowup from 'components/static/assets/arrow-up.png'

import React, { Component } from 'react'



export class QuantityUpdater extends Component {

    
    render() {
        return (
        <div style={{flex:1}}>
            <p style={{marginLeft: '30px'}} className="quantity">0</p>
            <div className="quantity">
                <img data-product="" data-action="add" className="chg-quantity update-cart" src={arrowup} alt="+"/>
        
                <img data-product="" data-action="remove" className="chg-quantity update-cart" src={arrowdown} alt="-"/>
            </div>
        </div>
        )
    }
}

export default QuantityUpdater

