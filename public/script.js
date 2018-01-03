// an array with all of our cart items
var cart = [];
var tot = 0;

var updateCart = function () {
  // Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
  var dataCart = { elementCart: cart };


  $('.cart-list').find('li').remove();
  var source = $('#item-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(dataCart);
  $('.cart-list').append(newHTML);

}

// add up the total of everything in cart

function findSum() {
  tot = 0;
  for (var i = 0; i < cart.length; i++) {
    tot = tot + cart[i].price


    //append the new total to html
    $('.total').text(tot);
  }

}

var addItem = function (item, price) {
  //Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
  cart.push({ item: item, price: price })
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  // $('.cart-list').children('li').remove();
  $('.total').text(0);
  cart.length = 0;
  updateCart()

  // console.log(cart)
  // updateCart()




  // console.log('dd')
}

$('.view-cart').on('click', function () {
  // hide/show the shopping cart!
  $('.shopping-cart').toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  // var source = $('#item-template').html();
  // var template = Handlebars.compile(source);
  // var newHTML = template(menuData);


  var itm = $(this).closest('.card').data().name;
  var prc = $(this).closest('.card').data().price;

  addItem(itm, prc);
  updateCart();
  findSum();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();

