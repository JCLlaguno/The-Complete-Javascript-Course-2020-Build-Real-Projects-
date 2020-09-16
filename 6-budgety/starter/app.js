// Module for app
var budgetController = (function() {
    
    var x = 23; // private (closure)
    
    var add = function(a) {
        
        return x + a;
        
    }
    
    return { 
        
        // public method
        publicTest: function(b) {
        
            return add(b);
        
        }
    }
    
})();


// Module for user interface
var UIController = (function() {
    
    //Some code
    
})();


// Module for controller
var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5); // private (closure)
    
    return {
        
        // public method
        anotherPublic: function() {
            
            console.log(z);
            
        }
        
    }
    
})(budgetController, UIController); // pass the two modules as arguments