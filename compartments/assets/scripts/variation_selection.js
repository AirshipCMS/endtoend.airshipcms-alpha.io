(function () {

  var selector = document.getElementById('variation_select');
  var addToCartButton = document.getElementById('add-to-cart-button');

  function setSelectData( index ){
    var dataset = selector.children[ ( index || 0 ) ].dataset;
    for(key in dataset) {
      addToCartButton.dataset[ key ] = dataset[ key ];
    }
  }

  if(selector) {
    selector.addEventListener('change', function(event){
      return setSelectData(this.selectedIndex);
    });
  }

  addToCartButton.addEventListener('click', function(event) {
    addToCartButton.children[0].innerHTML = 'Added to Cart!';
    var airshop_status = document.getElementsByClassName('airshop-status');
    airshop_status[0].style.opacity = 1;
    setTimeout(function() {
      addToCartButton.children[0].innerHTML = 'Add to Cart';
      airshop_status[0].style.opacity = 0;
    },3000);
  });
}());