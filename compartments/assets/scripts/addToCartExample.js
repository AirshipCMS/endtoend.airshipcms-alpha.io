// this example pulls all products from a /api/product_collection/{{collection}} and renders each product in a SELECT dropdown with the appropriate Add to Cart Button data attributes
var url = 'https://endtoend.airshipcms-alpha.io/api/product_collection/produce';
var selectEl = document.getElementById('variation_select');

function status(res) {
  if(res.ok) {
    return Promise.resolve(res);
  } else {
    return Promise.reject(new Error(res.statusText));
  }
}

function json(res) {
  return res.json();
}

fetch(url)
  .then(status)
  .then(json)
  .then(function(data) {
    renderProducts(data);
  }).catch(function(err) {
    console.error(err);
  });

function renderProducts(products) {
  products.forEach(function(product) {
    product.product_variations.forEach(function(variation) {
      var selectOption = document.createElement('option');
      selectEl.append(selectOption);
      selectOption.dataset.aerostatId = product.id;
      selectOption.dataset.productTitle = product.product_title;
      selectOption.dataset.price = variation.price.usd;
      selectOption.dataset.id = variation.id;
      selectOption.dataset.productVariationTitle = variation.product_variation_title;
      selectOption.dataset.qantity = 1;
      selectOption.innerHTML = product.product_title + ': ' + variation.product_variation_title + ' - $' + variation.price.usd/100;
    });
  });
}