

import React, { Component } from 'react'



export class ShippingInfo extends Component {

    componentDidMount(){
        
        
var form = document.getElementById('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log("Form submitted")

    document.getElementById('form-button').classList.add("hidden");
    document.getElementById('payment-info').classList.remove("hidden");
})

/*
document.getElementById('make-payment').addEventListener('click', function(e){
    submitFormData();
})

*/
function submitFormData(){
    console.log('Payment button clicked')
}

    }
    render() {
        return (
  
<React.Fragment>
    <form id="form">
        <p>User Information:</p>
        <div id="user-info">
            <div className="form-field">
                <input required className="form-control" type="text" name="name" placeholder="Name.." />
            </div>
            <div className="form-field">
                <input required className="form-control" type="email" name="email" placeholder="Email.." />
            </div>
        </div>
        
        <div id="shipping-info">
            <hr />
            <p>Shipping Information:</p>
            <hr />
            <div className="form-field">
                <input className="form-control" type="text" name="address" placeholder="Address.." />
            </div>
            <div className="form-field">
                <input className="form-control" type="text" name="city" placeholder="City.." />
            </div>
            <div className="form-field">
                <input className="form-control" type="text" name="state" placeholder="State.." />
            </div>
            <div className="form-field">
                <input className="form-control" type="text" name="zipcode" placeholder="Zip code.." />
            </div>
            
        </div>

        <hr />
        <input id="form-button" className="btn btn-success btn-block" type="submit" value="Continue" />
    </form>
</React.Fragment>
        )
    }
}

export default ShippingInfo

