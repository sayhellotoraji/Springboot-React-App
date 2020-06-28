import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Store from 'components/Store';
import Cart from 'components/Cart';
import Checkout from 'components/Checkout';
import ImageSlider from 'components/UserComponents/ImageSliderComponent/ImageSlider';


import ListProductsComponent from 'components/AdminComponents/ListProductsComponent';
import ProductComponent from 'components/AdminComponents/ProductComponent';
import Dashboard from 'components/AdminComponents/Dashboard';

import { UserProvider } from 'components/static/js/userContext';

//Create Cookie
function getCookie(name){
  var cookieArr=document.cookie.split(";");

  for(var i=0;i<cookieArr.length;i++){
      var cookiePair=cookieArr[i].split("=");


      if(name == cookiePair[0].trim()){
          return decodeURIComponent(cookiePair[1]);
      }
  }
  return null;
}

var cart=JSON.parse(getCookie('cart'))
if(cart==undefined){
  cart={}
  console.log('Cart was created!')
  document.cookie = 'cart='+JSON.stringify(cart) +";domain=path=/"
}



console.log('Cart:', cart)

var usercookie = JSON.stringify(cart)




function App() {
  
  return (
    <React.Fragment>
      
      
      <Router>
        <Switch>
            <Route exact path="/admin/dashboard" component={Dashboard}/>
            <Route exact path="/admin/products" component={ListProductsComponent}/>
            <Route path="/admin/products/:id" component={ProductComponent} />
            
            
            <UserProvider value={usercookie}>

            <Route exact path="/" component={Store}/>

            
            <Route exact path="/product_view" component={ImageSlider}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path="/checkout" component={Checkout}/>

            </UserProvider>
            

            {/* <Route component={ErrorPage} /> */}
        </Switch>
      </Router>
      
      
    </React.Fragment>
  );
}

export default App;
