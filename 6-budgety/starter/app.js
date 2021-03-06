// BUDGET CONTROLLER
var budgetController = (function() {
    
    // expense and income function constructors
    var Expense = function(id, description, value) {
        
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
        
    };
    
    // calculate the percentage for each expense object
    Expense.prototype.calcPercentage = function(totalIncome) {
        
        if(totalIncome > 0) {
        
            this.percentage = Math.round((this.value / totalIncome) * 100);
            
        } else {
            
            this.percentage= -1;
            
        }
        
    };
    
    // retrieve the percentage from the object then return it
    Expense.prototype.getPercentage = function() {
        
        return this.percentage;
        
    };
    
    var Income = function(id, description, value) {
        
        this.id = id;
        this.description = description;
        this.value = value;
        
    };
    
    // private function to calculate the total income / expenses
    var calculateTotal = function(type) {
        
        var sum = 0;
        
        data.allItems[type].forEach(function(cur) {
            
            sum += cur.value;
            
        });
        
        /*
        
        0
        [200, 400, 100]
        sum = 0 + 200
        sum = 200 + 400
        sum = 600 + 100 = 700
        
        */
        
        // store the totals (inc or exp) on the data structure
        data.totals[type] = sum;
        
    }
    
    // data structure
    var data = {
        
        allItems: {
            
            exp: [],
            inc: []
            
        },
        
        totals: {
            
            exp: 0,
            inc: 0
        
        },
        budget: 0,
        percentage: -1
        
    }
    
    return {
        
        // public methods / objects
        addItem: function(type, des, val) {
            
            var newItem, ID;
            
            // [1 2 3 4 5], next ID = 6
            // [1 2 4 6 8], next ID = 9
            // ID = last ID + 1
            
            // Create new ID
            if(data.allItems[type].length > 0) {
                
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            
            } else {
                
                ID = 0; // when the array is empty, then the new id should be 0
                
            }
            
            // Create new item based on 'inc' or 'exp' type
            if(type === 'exp') {
                
                newItem = new Expense(ID, des, val);
                
            } else if (type === 'inc') {
                
                newItem = new Income(ID, des, val);
                
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
            
        }, 
    
        // remove an item from the array
        deleteItem: function(type, id) {
            
            // id = 6
            // data.allItems[type][id]
            // [1 2 4 {6} 8] // 6 is removed
            // index = 3
            
            var ids, index;
        
            // return the id's of the item, save to ids variable
            ids = data.allItems[type].map(function(current) {
                
                return current.id;
                
            });
            
            // search for the id that matches the parameter (id) using indexOf()
            index = ids.indexOf(id);
            
            // if the item exists
            if(index !== -1) {
                
                // delete the item from the data structure
                data.allItems[type].splice(index, 1);
                
            }
            
            
        
        },
        
        calculateBudget: function () {
            
            // Calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // Calculate the percentage of income that we spent
            // Expense = 100 and income 200, spent 50% = 100/200 = 0.5 * 100
            if(data.totals.inc > 0) {
                
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            
            } else {
                
                data.percentage = -1;    
                
            }
            
        },
        
        // calculate the expense percentage for each of the expense elements in the data structure
        calculatePercentages: function() {
            
            /*
                a = 20 
                b = 10
                c = 40
                income = 100
                a = 20 / 100 = 20%
                b = 10 / 100 = 10%
                c = 40 / 100 = 40%
            */
            
            // loop through each item and apply the calcPercentage method
            data.allItems.exp.forEach(function(cur) {
                
                // calculate each expense that is present in the object
                // pass the total income as an argument
                cur.calcPercentage(data.totals.inc);
                
            });
            
        },
        
        // get the percentage of each item and return it as an array
        getPercentages: function() {
            
            // loop through each item and get its percentage
            var allPerc = data.allItems.exp.map(function(cur) {
                
               return cur.getPercentage(); // returns an array
                
            });
            
            return allPerc;
            
        },
        
        getBudget: function() {
            
            return {
                
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
                
            }
            
        },
        
        testing: function() {
            
            console.log(data);
            
        }
        
    }
    
})();

var Expense = function(id, description, value) {
    
    this.id = id;
    this.description = description;
    this.value = value;
    
}


// UI CONTROLLER
var UIController = (function() {
    
    //Some code
    var DOMstrings = {
        
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
        
    }
        
    var formatNumber = function(num, type) {
            
        var numSplit, int, dec, type;
        
        /*
        + or - before number
        exactly 2 decimal points
        comma separating the thousands
        
        2310.4567 -> + 2,310.46 
        2000 -> + 2,000.00
        */

        num = Math.abs(num); // absolute value
        num = num.toFixed(2); // convert the number to string with decimal numbers (rounded)

        // [array] - divide the string into an array using the dot (.) as separator
        numSplit = num.split('.');

        int = numSplit[0]; // first index

        if(int.length > 3) {

            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510

        }

        dec = numSplit[1]; // second index
        
        // put '+' or '-' sign before the number if not equal to '0.00'
//        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
        if(num !== '0.00') {

            return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
        
        } else {
            
            return int + '.' + dec;
            
        }
       
    };
            
    // nodeListForEach private method
    // takes the fields and the callback function as parameter
    var nodeListForEach = function(list, callback) {

        for(var i = 0; i < list.length; i++) {

            // for each item in the nodeList apply the callback (display the percentage)
            // in each iteration, the callback function is called
            callback(list[i], i); 

        }

    }
        
    return {
        // public methods
        // return the inputted value from the UI
        getInput: function() {
        
            return {
        
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
        
            }
        
        },
        
        // return the item list either income or expense / display it to the UI
        // the newItem from the global app controller is passed to the obj parameter
        addListItem: function(obj, type) {
            
            var html, newHtml, element;
                
            // Create HTML string with placeholder text
            
            if(type === 'inc') {
                
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                
            } else if(type === 'exp') {
                
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml); 
            
            
        },
        
        // delete the item from the UI
        deleteListItem: function(selectorID) {
            
            var el = document.getElementById(selectorID);
        
            el.parentNode.removeChild(el);    
            
        },
        
        
        // clear the input fields in the UI
        clearFields: function() {
            
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current, index, array) {
                
               current.value = "";
                
            });
            
            fieldsArr[0].focus();
            
        },
        
        displayBudget: function(obj) {
            
            var type = obj.budget > 0 ? 'inc' : 'exp';
            
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            if(obj.percentage > 0) {
                
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';    
                
            } else {
                
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
                
            }
            
        },
        
        displayPercentages: function(percentages) {
            
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
            
            // call the nodeListForeach method passing the fields and a callback as an argument
            nodeListForEach(fields, function(current, index) {
               
                if(percentages[index] > 0) {
                    
                    current.textContent = percentages[index] + '%';
                    
                } else {
                    
                    current.textContent = '---';
                    
                }
                
            });
            
        },
        
        dateFormat: function() {
            
            var now, months, month, year;
            // var christmas = new Date(2016, 11, 25);
            
            now = new Date();
            
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            month = now.getMonth();
            
            year = now.getFullYear();
            
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
            
        },
        
        // function to change the element's outline color
        changedType: function() {
            
            var fields = document.querySelectorAll(
                
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue
                
            );
            
            nodeListForEach(fields, function(cur) {
                
                cur.classList.toggle('red-focus'); // input fields
                
            });
            
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red'); // input button
            
        },
        
        // return the dom string elements (classes)
        getDOMstrings: function() {
        
            return DOMstrings;
        
        } 
        
    }
    
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {

            if(event.keyCode === 13 || event.which === 13) {

                ctrlAddItem();

            }

        });
        
        // event listener
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        
        // change the element's outline color 
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
        
    };
    
    var updateBudget = function() {
        
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();
        
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        
        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
        
    }
    
    // update the percentages when adding and updating an item
    var updatePercentages = function() {
        
        // 1. Calculate percentages
        budgetCtrl.calculatePercentages();
        
        // 2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();
        
        // 3. Update the UI with the new percentages
        UICtrl.displayPercentages(percentages);
        
    }
    
    var ctrlAddItem = function() {
        
        var input, newItem;
        
        // 1. Get the field input data
        input = UICtrl.getInput();
        
        if(input.description !== "" && !isNaN(input.value) && input.value > 0) {
            
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3. Add the item to the UI
            // get the returned object (newItem) and get the type (inc/exp) from the input variable
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear fields
            UICtrl.clearFields();

            // 5. Calculate and update budget
            updateBudget();
            
            // 6. Calculate and update percentages
            updatePercentages();
        
        }
        
    };
    
    // delete an item
    var ctrlDeleteItem = function(event) {

        var itemId, splitID, type, id;
        
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if(itemID) {
          
            // inc-1
            splitID = itemID.split('-');
            
            type = splitID[0];
            
            ID = parseInt(splitID[1]);
            
            // 1. Delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);
            
            // 2. Delete the item from the UI
            UICtrl.deleteListItem(itemID);
            
            // 3. Update and show the new budget
            updateBudget();
            
            // 4. Calculate and update percentages
            updatePercentages();
            
        }
        
    };
    
    return { 
        init: function() {
        
            console.log('Application has started');
            UICtrl.dateFormat();
            UICtrl.displayBudget({
                
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1 
                
            });
            
            setupEventListeners();

        }
    }
    
})(budgetController, UIController); // pass the two modules as arguments

controller.init();
