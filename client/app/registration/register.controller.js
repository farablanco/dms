// TODO: Send and retrieve information from server via Angular $http; modularize via services
// TODO: 6. Give controller access to DeptService services/functionalities
// TODO: 7. Use DeptService services to send information entered in view (HTML) to the server. Handle success/failure.
// TODO: 9. Show thank you page if registration is successful

// Always use an IIFE, i.e., (function() {})();
(function () {
    angular
        .module("DMS")          // to call an angular module, omit the second argument ([]) from the angular.module()
        // syntax this syntax is called the getter syntax
        .controller("RegCtrl", RegCtrl);    // angular.controller() attaches a controller to the angular module
                                            // specified as you can see, angular methods are chainable


    // TODO: 6.1 Inject the custom DeptService service so your controller can use its functionalities
    // TODO: 9.1 Inject the built-in service $window. This will be used to redirect to new page
    // Dependency injection. An empty [] means RegCtrl does not have dependencies. Here we inject DeptService so
    // RegCtrl can call services related to department.
    RegCtrl.$inject = ['$window', 'DeptService'];


    // TODO: 6.2 Accept the injected dependency as a parameter.
    // RegCtrl function declaration. A function declaration uses the syntax: functionName([arg [, arg [...]]]){ ... }
    // RegCtrl accepts the injected dependency as a parameter. We name it DeptService for consistency, but you may
    // assign any name
    function RegCtrl($window, DeptService) {

        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the RegCtrl)
        // Any function or variable that you attach to vm will be exposed to callers of RegCtrl, e.g., register.html
        var vm = this;


        // Exposed data models -----------------------------------------------------------------------------------------
        // Creates a department object. We expose the department object by attaching it to the vm. This allows us to
        // apply two-way data-binding to this object by using ng-model in our view (i.e., index.html)
        vm.department = {
            id: "",
            name: ""
        };

        // Exposed functions ----------------------------------------------------------------------------------------
        // Exposed functions can be called from the view. e.g., to call the vm.register from our view (register.html),
        // code: ctrl.register()
        vm.register = register;


        // Function declaration and definition -------------------------------------------------------------------------
        function register() {
            // Calls alert box and displays registration information
            alert("The registration information you sent are \n" + JSON.stringify(vm.department));

            // Prints registration information onto the client console
            console.log("The registration information you sent were:");
            console.log("Department id: " + vm.department.id);
            console.log("Department name: " + vm.department.name);

            // TODO: 7.1 In register function, pass the registration information to the appropriate DeptService
            // TODO: 7.1 function
            // TODO: 7.2 Handle promise object using .then() and .catch()
            // TODO: 9.2 On success, redirect to thanks.html
            // We call DeptService.insertDept to handle registration of department information. The data sent to this
            // function will eventually be inserted into the database.
            DeptService
                .insertDept(vm.department)
                .then(function (result) {
                    console.log("result " + JSON.stringify(result));
                    $window.location.assign('/app/registration/thanks.html');
                })
                .catch(function (err) {
                    console.log("error " + err);
                });
        } // END function register()
    } // END RegCtrl

})();