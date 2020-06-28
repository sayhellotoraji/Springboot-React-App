
import shirt from 'components/images/shirt.jpg'
import React, { Component } from 'react'

export class ProductInfo extends Component {

    
    render() {
        
        return (
<React.Fragment>
    {/* {% for item in items %} */}

    <div style={{flex:2}}><img className="row-image" src={shirt} alt="product"/></div>
    <div style={{flex:2}}><p>shirt</p></div>
    <div style={{flex:1}}><p>&#8377; 500</p></div>
    
    



</React.Fragment>
        )
    }
}

export default ProductInfo


