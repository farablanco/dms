// TODO: Send and retrieve information to/from server via Angular $http; modularize via services
// TODO: 10 Move data retrieved for display to the server
// TODO: 12. Give controller access to DeptService services/functionalities
// TODO: 13. Use DeptService services to retrieve all data from server during view initialization. Handle
// TODO: 13. success/failure.


// Always use an IIFE, i.e., (function() {})();
(function () {
    // Attaches a SearchCtrl to the DMS module
    angular
        .module("DMS")
        .controller("SearchCtrl", SearchCtrl);

    // TODO: 12.1 Inject the custom DeptService service so your controller can use its functionalities
    // Dependency injection. An empty [] means RegCtrl does not have dependencies. Here we inject DeptService so
    // RegCtrl can call services related to department.
    // Dependency injection. An empty [] means SearchCtrl does not have dependencies
    SearchCtrl.$inject = ['DeptService'];

    // TODO: 12.2 Accept the injected dependency as a parameter.
    // Search function declaration
    function SearchCtrl(DeptService) {

        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the SearchCtrl). Any
        // function or variable that you attach to vm will be exposed to callers of SearchCtrl, e.g., search.html
        var vm = this;

        // Exposed data models -----------------------------------------------------------------------------------------
        // TODO: 10 Change vm.departments to an empty array. Move current contents to server.
        vm.departments = [];

        // Exposed functions ------------------------------------------------------------------------------------------
        // Exposed functions can be called from the view. Currently, search.controller.js doesn't have any exposed
        // functions

        // Initializations --------------------------------------------------------------------------------------------
        // Functions that are run when view/html is loaded
        // TODO: 13.5 call init. Init is a private function
        // init is a private function (i.e., not exposed)
        init();

        // Function declaration and definition -------------------------------------------------------------------------
        // TODO: 13.1 Define init() function. This function would call appropriate DeptService service to populate
        // TODO: 13.1 view with initial value
        // The init function initializes view
        function init() {

            // TODO: 13.2 In init function, populate search.html with department data from server
            // TODO: 13.3 Handle promise object using .then() and .catch()
            // TODO: 13.4 On success, fill vm.departments with data from server
            // We call DeptService.retrieveDept to handle retrieval of department information. The data retrieved from
            // this function is used to populate search.html.
            DeptService
                .retrieveDept()
                .then(function(results){
                    vm.departments = results.data;
                })
                .catch(function(err){
                    console.log("error " + err);
                });
        }

    }
})();