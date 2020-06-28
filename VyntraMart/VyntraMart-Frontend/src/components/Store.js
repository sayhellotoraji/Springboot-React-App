import React, { Component } from 'react'



import NavigationBar from 'components/NavigationBar'
import ProductCard from 'components/UserComponents/StoreComponent/ProductCard'
import Slideshow from 'components/UserComponents/StoreComponent/Slideshow'

import 'components/static/css/main.css'
import { UserConsumer } from 'components/static/js/userContext'

 
function cartUpdate(cart){

    //User is set to Anonymous - default
        
        var user = 'AnonymousUser'
        
        var cart = JSON.parse(JSON.stringify(cart))
        var updateBtns = document.getElementsByClassName('update-cart')
        console.log(updateBtns)
        for(var i=0;i< updateBtns.length;i++){
            updateBtns[i].addEventListener('click',function(){
                var productId = this.dataset.product
                var action = this.dataset.action
    
                console.log('productId:',productId, 'action:',action)
                // Default json for testing
               
                
                console.log('User:',user)
                if(user == 'AnonymousUser'){
                    // console.log("Not logged in")
                    addCookieItem(productId, action, cart)
                }
            })
        } 
    }
    
    
    // Add Cookie item   
    function addCookieItem(productId, action, cart){
    console.log("Not logged in..")
    
    if(action =='add'){
        if(cart[productId]==undefined){
    //below code used for testing- actual code 
    cart[productId]={'quantity':1}
            // if(productId==1)
            // cart[productId]={'productName':'shirt','price':500, 'quantity':1}
            // else if(productId==2)
            // cart[productId]={'productName':'blazer','price':2000, 'quantity':1}
            // else
            // cart[productId]={'productName':'jeans','price':1000, 'quantity':1}
        }
    
    //End
        else{
            cart[productId]['quantity'] += 1
        }
    }
    
    if(action =='remove'){
        cart[productId]['quantity'] -= 1
        if(cart[productId]['quantity']<=0){
            console.log("Remove item")
            delete cart[productId]
        }
    }
    
    
    console.log("Cart:",cart)
    document.cookie ='cart=' +JSON.stringify(cart) + ";domain=;path=/"
    
    
    
    }



    
    
export class Store extends Component {

    
   componentDidMount(){
       var cart=(this.context)
      
       cartUpdate(cart)
   }
   
    render() {
        return (
<UserConsumer>
{cart =>{
    return <React.Fragment>
    <NavigationBar />
  
    
    <Slideshow/>

    
    <div className="row" style={{marginTop: '-10px', width: '70%'}}>
        
        {/* {% for product in products %} */}
        
        <ProductCard id={1} productName="shirt" price={500}/>
        <ProductCard id={2} productName="blazer" price={2000}/>
        <ProductCard id={3} productName="jeans" price={1000}/>
        
        

        {/* {% endfor %} */}

    </div>
</React.Fragment>
}}

</UserConsumer>
        )
    }
}

export default Store
