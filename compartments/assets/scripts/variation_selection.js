(function () {

  var selector = document.getElementById('variation_select');
  var variationList = document.getElementsByClassName('variation');
  var addToCartButton = document.querySelectorAll('[data-aerostat-id');

  // Example 1: Select dropdown
  function setSelectData( index ){
    var dataset = selector.children[ ( index || 0 ) ].dataset;
    for(key in dataset) {
      addToCartButton[0].dataset[ key ] = dataset[ key ];
    }
  }

  if(selector) {
    selector.addEventListener('change', function(event){
      return setSelectData(this.selectedIndex);
    });
  }

  // Example 2: Variation list
  Array.prototype.slice.call(variationList).forEach(function(el) {
    el.onclick = setVariationListData;
  });

  function setVariationListData(){
    var dataset = this.dataset;
    for(key in dataset) {
      addToCartButton[0].dataset[ key ] = dataset[ key ];
    }
  }

  // Add to Cart Button
  Array.prototype.slice.call(addToCartButton).forEach(function(el) {
    el.onclick = addedToCart;
  });

  function addedToCart() {
    var button = this;
    button.children[0].innerHTML = 'Added to Cart!';
    var airshop_status = document.getElementsByClassName('airshop-status');
    airshop_status[0].style.opacity = 1;
    setTimeout(function() {
      button.children[0].innerHTML = 'Add to Cart';
      airshop_status[0].style.opacity = 0;
    },3000);
  };
}());