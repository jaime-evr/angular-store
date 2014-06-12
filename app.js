(function(){
  var app = angular.module('gemStore', []);

  var gems = [
    { name: 'Azurite', price: 2.95, soldOut: true, canPurchase: false },
    { name: 'Bloodstone', price: 5.95, soldOut: false, canPurchase: true },
    { name: 'Zircon', price: 3.95, soldOut: false, canPurchase: false },
  ];

  app.controller('StoreController', function() {
  	this.products = gems;
  });

})();

