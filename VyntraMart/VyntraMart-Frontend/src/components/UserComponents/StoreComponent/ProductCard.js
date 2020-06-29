import React, { Component } from 'react'
import placeholder from "components/static/assets/placeholder.png"



export class ProductCard extends Component {
    render() {
        return (
          
    <div className="col-lg-4">  
        <img className="cardthumbnail" src={placeholder} alt="placeholder"/>
        <div className="box-element product">
            <h6><strong>{this.props.productName}</strong></h6>
            <hr/>
         
            <button data-product={this.props.id} data-action="add" className="btn btn-outline-secondary add-btn update-cart">Add to Cart</button>
            <a className="btn btn-outline-success" href="user/product_view">View</a>
            <h6 style={{display: 'inline-block', float: 'right', paddingTop: '10px'}}><strong> &#8377; {this.props.price}</strong></h6>
            
        </div>
    </div>   
            
        )
    }
}

export default ProductCard


