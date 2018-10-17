//This module takes care of the the data manipulation
var budgetController = (function() {})();

//This module takes care of the user interface
var UIController = (function() {
  //Code body goes here
})();

//This module connects the two modules above
var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function() {
    //1. Get the field input data
    //2. Add the item to the budget controller
    //3. Add the item to the UI
    //4. Calculate the budget
    //5.Display the budget
    console.log("Something");
  };
  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keyup", function(e) {
    // console.log(e);
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
