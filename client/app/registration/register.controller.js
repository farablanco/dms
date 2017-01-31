// TODO: Convert app to an AngularJS app
// TODO: 2. Define a controller for the registration form found in index.html. Name the controller RegCtrl
// TODO: 6. Create the data model and function that supports these index.html Register button functionalities:
// TODO: 6a pops up alert box that displays registration information
// TODO: 6b writes registration information onto the client console
//

// TODO: 2.1 Create an IIFE function
// Always use an IIFE, i.e., (function() {})();
(function() {
    // TODO: 2.2 call your angular module (in this case, DMS)
    // TODO: 2.3 attach the controller (in this case, RegCtrl) to your angular module
    angular
        .module("DMS")          // to call an angular module, omit the second argument ([]) from the angular.module() syntax
                                // this syntax is called the getter syntax
        .controller("RegCtrl", RegCtrl);    // angular.controller() attaches a controller to the angular module specified
                                            // as you can see, angular methods are chainable


    // TODO: 2.4 Use the $inject property to perform dependency injection
    // Dependency injection. [] means RegCtrl does not have dependencies
    RegCtrl.$inject = [];

    // TODO: 2.5 Declare your controller function (in this case, RegCtrl)
    // RegCtrl function declaration
    // A function declaration uses the syntax: function name([arg [, arg [...]]]){ ... }
    function RegCtrl() {
        // TODO: 2.6 Define vm as the controller object (this)
        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the RegCtrl)
        // Any function or variable that you attach to vm will be exposed to callers of RegCtrl, e.g., index.html
        var vm = this;


        // Exposed data models
        // TODO: 6.3 Create a vm.department object to model the input fields in our view (i.e., index.html)
        // Creates a department object that
        // We expose the department object by attaching it to the vm
        // This will allow us apply two-way data-binding to this object by using ng-model in our view (i.e., index.html)
        vm.department = {
            id: "",
            name: ""
        };

        // Exposed functions
        // TODO: 6.2 Expose register function
        // Exposed functions can be called from the view. e.g., to call the vm.register from our view (index.html), code:
        // ctrl.register()
        vm.register = register;

        // Function declaration and definition
        // TODO: 6.1 Declare register function.
        function register() {
            // TODO: 6.4a Show alert box with registration information
            // Calls alert box and displays registration information
            alert("The registration information you sent are \n" + JSON.stringify(vm.department));
            // TODO: 6.4b Print the registration information onto the client console
            // Prints registration information onto the client console
            console.log("The registration information you sent were:");
            console.log("Department id: " + vm.department.id);
            console.log("Department name: " + vm.department.name);
        } // END function register()
    } // END RegCtrl

})();