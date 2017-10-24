(function () {

  // select box, add to cart
  var selector = document.getElementById('variation_select');
  var add_to_cart_select = document.getElementById('add_to_cart_select');
  var ap = 'aeroproduct';
  var variation_list = document.querySelector('.product-variations-list');
  var add_subscription_to_cart = document.querySelector('.add-sub-button');

  // tracks what product the user is viewing
  if(document.getElementById('product-title') !== null) {
    var product_title = document.getElementById('product-title').innerHTML;
    var price = document.getElementById('price').innerHTML;
  }

  function setSelectData( stringKeyArr, index ){
    return stringKeyArr.forEach(function(stringKey){
      var dataString = ap + stringKey;
      add_to_cart_select.dataset[ dataString ] = selector.children[ ( index || 0 ) ].dataset[ dataString ];
    });
  }

  if(selector != null && add_to_cart_select != null){
    // set the initial values
    var dataValues = ['title','VariationTitle','VariationId','Id','Price','quantity','Currency'];
    setSelectData( dataValues );

    // listen for changes
    selector.addEventListener('change', function(event){
      return setSelectData( dataValues , this.selectedIndex);
    });

  }
  // List selector, add to cart
  var product_variations = document.getElementById('product_variation_label_item');
  var add_to_cart_list = document.getElementById('add_to_cart_list');
  if( product_variations != null && add_to_cart_list != null ){
    var dataMap = {}
    dataMap[ ap + 'VariationTitle' ] = 'vtitle';
    dataMap[ ap + 'VariationId' ] = 'vid';
    dataMap[ ap + 'Price' ] = 'vprice';

    function setListData( dataMap, event ){
      var dataKeys = Object.keys(dataMap);
      if ( event != null && !event.target.classList.contains('disabled') && !event.target.classList.contains('product-variations-list')){
        add_to_cart_list.disabled = false;
        add_to_cart_list.classList.remove('button-disabled');
        if(!add_to_cart_list.classList.contains('button-clickable')) {
          add_to_cart_list.className += ' button-clickable';
        }
        dataKeys.forEach( function( key ){
          return add_to_cart_list.dataset[key] = event.target.dataset[ dataMap[key] ];
        })
      } 
      
      else {
        add_to_cart_list.disabled = true;
        if(!add_to_cart_list.classList.contains('button-disabled')) {
          add_to_cart_list.className += ' button-disabled';
        }
        add_to_cart_list.classList.remove('button-clickable');
        return dataKeys.forEach( function( key ){
          add_to_cart_list.dataset[key] = "";
        });
      }
    }
    // set the initial value
    setListData( dataMap );
    
    // listen for changes
    product_variations.addEventListener('click', function(event){
      setListData( dataMap, event );
      if(!event.target.classList.contains('disabled') && !event.target.classList.contains('product-variations-list')) {
        for(var i in this.children) {
          if(this.children[i].className === 'active') {
            this.children[i].className = '';
          }
        }
        event.target.className += 'active';
      }
      else if(event.target.classList.contains('disabled') || event.target.classList.contains('product-variations-list')) {
        for(var i in this.children) {
          if(this.children[i].className === 'active') {
            this.children[i].className = '';
          }
        }
      }
    });

    add_to_cart_list.addEventListener('click', function(event) {
      var dataKeys = Object.keys(dataMap);
      var airshop_status = document.getElementsByClassName('airshop-status');
      airshop_status[0].style.opacity = 1;
      if(event!= null && !event.target.classList.contains('disabled')) {
        add_to_cart_list.className += ' button-added-to-cart';
        add_to_cart_list.disabled = true;
        add_to_cart_list.children[0].innerHTML = 'Added to Cart';
        add_to_cart_list.classList.remove('button-clickable');
        setTimeout(function(){ 
          airshop_status[0].style.opacity = 0;
          add_to_cart_list.className += ' button-disabled';
          add_to_cart_list.children[0].innerHTML = 'Add to Cart';
          add_to_cart_list.classList.remove('button-added-to-cart');
          for(var i in variation_list.children) {
            if(variation_list.children[i].classList) {
              variation_list.children[i].classList.remove('active');
            }
          }
          return dataKeys.forEach( function( key ){
            add_to_cart_list.dataset[key] = '';
          });
        }, 3000);
      }
    })
  }
  if(add_to_cart_select !== null){
    add_to_cart_select.addEventListener('click', function(event) {
      add_to_cart_select.children[0].innerHTML = 'Added to Cart!';
      var airshop_status = document.getElementsByClassName('airshop-status');
      airshop_status[0].style.opacity = 1;
      setTimeout(function() {
        add_to_cart_select.children[0].innerHTML = 'Add to Cart';
        airshop_status[0].style.opacity = 0;
        airshop_status[0].innerHTML = '';
      },3000);
    });
  }
  if(add_subscription_to_cart !== null){
    add_subscription_to_cart.addEventListener('click', function(event) {
      var airshop_status = document.getElementsByClassName('airshop-status');
      airshop_status[0].style.opacity = 1;
      add_subscription_to_cart.children[0].innerHTML = 'Added to Cart!';
      setTimeout(function() {
        add_subscription_to_cart.children[0].innerHTML = 'Add to Cart';
        airshop_status[0].style.opacity = 0;
        airshop_status[0].innerHTML = '';
      },3000);
    });
  }
}());