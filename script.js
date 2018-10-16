//This module takes care of the the data manipulation
var budgetController = (function() {
  var x = 23;
  var add = function(a) {
    return x + a;
  };

  return {
    publicTest: function(b) {
      return add(b);
    }
  };
})();

//This module takes care of the user interface

var UIController = (function() {
  //Code body goes here
})();

//This module connects the two modules above

var controller = (function(budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(5);
  return {
    anotherPublic: function() {
      console.log(z);
    }
  };
})(budgetController, UIController);
