(function () {
  // These examples can be found at /compartments/templates/produce/show.html and /compartments/templates/community_boxes/show.html

  var selector = document.getElementById('variation_select');
  var variationList = document.getElementsByClassName('variation');
  var addToCartButton = document.querySelectorAll('button[data-aerostat-id');
  var miscDataCheckbox = document.getElementById('misc-data-example');

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

  // Update Misc Data attribute
  miscDataCheckbox.addEventListener('click', toggleMiscDataValue);
  function toggleMiscDataValue() {
    Array.prototype.slice.call(addToCartButton).forEach(function(el) {
      el.dataset.miscDataChopped = miscDataCheckbox.checked;
    });
  }

  // Add to Cart Button
  Array.prototype.slice.call(addToCartButton).forEach(function(el) {
    el.addEventListener('click', addedToCart)
  });

  function addedToCart() {
    var button = this;
    button.children[0].innerHTML = 'Added to Cart!';
    button.disabled = true;
    setTimeout(function() {
      button.children[0].innerHTML = 'Add to Cart';
      button.disabled = false;
    },3000);
  };
}());