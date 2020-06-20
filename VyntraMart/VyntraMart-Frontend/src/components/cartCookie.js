

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




    // Cart Update

    function cartUpdate(){
        //User is set to Anonymous - default
            var user = 'AnonymousUser'
            
            var updateBtns = document.getElementsByClassName('update-cart')
            for(var i=0;i< updateBtns.length;i++){
                updateBtns[i].addEventListener('click',function(){
                    var productId = this.dataset.product
                    var action = this.dataset.action
        
                    console.log('productId:',productId, 'action:',action)
        
                    console.log('User:',user)
                    if(user === 'AnonymousUser'){
                        addCookieItem(productId, action);
                    }
                })
            } 
        }


    // Add Cookie item   
    function addCookieItem(productId, action){
        console.log("Not logged in..")
    
        if(action =='add'){
            if(cart[productId]==undefined){
                cart[productId]={'quantity':1}
            }
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
