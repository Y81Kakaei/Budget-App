//This module takes care of the the data manipulation
var budgetController = (function() {})();

//This module takes care of the user interface
var UIController = (function() {
  var DOMString = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMString.inputType).value, //will be either inc or exp
        description: document.querySelector(DOMString.inputDescription).value,
        value: document.querySelector(DOMString.inputValue).value
      };
    },
    getDOMStrings: function() {
      return DOMString;
    }
  };
})();

//This module connects the two modules above
var controller = (function(budgetCtrl, UICtrl) {
  var setUpEventListeners = function() {
    var DOM = UICtrl.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keyup", function(e) {
      // console.log(e);
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
      }
    });
  };
  var ctrlAddItem = function() {
    //1. Get the field input data
    var input = UIController.getInput();
    console.log(input);
    //2. Add the item to the budget controller
    //3. Add the item to the UI
    //4. Calculate the budget
    //5.Display the budget
  };

  return {
    init: function() {
      // console.log("Applicarions are started");
      setUpEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
