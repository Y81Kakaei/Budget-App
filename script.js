//This module takes care of the the data manipulation
var budgetController = (function() {
  //Creating the data model for expenses
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  //Creating the data model for incomes
  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      //Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      //Create new ID based on 'inc' or 'exp' type
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }
      //Add it to data structure
      data.allItems[type].push(newItem);
      // Return new element
      return newItem;
    },
    testing: function() {
      console.log(data);
    }
  };
})();

//This module takes care of the user interface
var UIController = (function() {
  var DOMString = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list"
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMString.inputType).value, //will be either inc or exp
        description: document.querySelector(DOMString.inputDescription).value,
        value: document.querySelector(DOMString.inputValue).value
      };
    },
    addListItem: function(obj, type) {
      var html, newHtml, element;
      //Create HTML string with placeholdertext
      if (type === "inc") {
        element = DOMString.incomeContainer;
        html =
          '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"> <i class="ion-ios-close-outline"/></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMString.expensesContainer;
        html =
          '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div></div></div>';
      }

      //Replace placeholer text with some actual data
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);
      //Insert the HTML to the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
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
    var input, newItem;
    //1. Get the field input data
    input = UICtrl.getInput();

    //2. Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    //3. Add the item to the UI
    UICtrl.addListItem(newItem, input.type);
    //4. Calculate the budget
    //5.Display the budget
  };

  return {
    init: function() {
      // console.log("Applications are started");
      setUpEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
