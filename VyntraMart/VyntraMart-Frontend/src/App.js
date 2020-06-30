import React, {Component} from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from 'components/UserComponents/AuthComponents/LoginComponent';

import Register from 'components/UserComponents/AuthComponents/RegisterComponent';

import Store from 'components/Store';
import Cart from 'components/Cart';
import Checkout from 'components/Checkout';
import ImageSlider from 'components/UserComponents/ImageSliderComponent/ImageSlider';


import NavigationBar from 'components/NavigationBar'


import ListProductsComponent from 'components/AdminComponents/ListProductsComponent';
import ProductComponent from 'components/AdminComponents/ProductComponent';
import Dashboard from 'components/AdminComponents/Dashboard';

import { UserProvider } from 'components/static/js/userContext';



//Create Cookie
function getCookie(name){
  var cookieArr=document.cookie.split(";");

  for(var i=0;i<cookieArr.length;i++){
      var cookiePair=cookieArr[i].split("=");


      if(name === cookiePair[0].trim()){
          return decodeURIComponent(cookiePair[1]);
      }
  }
  return null;
}

var cart=JSON.parse(getCookie('cart'))
if(cart===undefined){
  cart={}
  console.log('Cart was created!')
  document.cookie = 'cart='+JSON.stringify(cart) +";domain=;path=/"
}


console.log('Cart:', cart)

var usercookie = JSON.stringify(cart)




class App extends Component{
  

  


  render(){

    // const {currentUser} = this.state;
    
 
  return (
    <React.Fragment>
      <UserProvider>
      <NavigationBar />
      </UserProvider>

      <Router>
        <Switch>
            <Route exact path="/admin" component={Dashboard}/>
            <Route exact path="/admin/products" component={ListProductsComponent}/>
            <Route path="/admin/products/:id" component={ProductComponent} />
            
            
            <UserProvider value={usercookie} >

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/" component={Store}/>
            <Route exact path="/user/product_view" component={ImageSlider}/>
            <Route exact path="/user/cart" component={Cart}/>
            <Route exact path="/user/checkout" component={Checkout}/>

            </UserProvider>
            

            {/* <Route component={ErrorPage} /> */}
        </Switch>
      </Router>
      
      
    </React.Fragment>
  );
}

}

export default App;
