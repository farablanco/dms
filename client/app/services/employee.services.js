//TODO: Add ability to choose manager when registering a department. An existing manager shouldn't be
//TODO: allowed on the list. Saving of department in departments table and of manager in dept_managers table should be 1
//TODO: transaction (i.e., atomic)
//TODO: 3. Create a service for Employees. Create a function that would call and retrieve employee information from the server

//TODO 3.1 Create service. You should know how to do this by now so detailed instructions wouldn't be given
// Always use an IIFE, i.e., (function() {})();
(function () {
    // Attaches DeptService service to the DMS module
    angular
        .module("DMS")
        .service("EmpService", EmpService);

    // Dependency injection. Here we inject $http because we need this built-in service to communicate with the server
    // There are different ways to inject dependencies; $inject is minification safe
    EmpService.$inject = ['$http'];

    // DeptService function declaration
    // Accepts the injected dependency as a parameter. We name it $http for consistency, but you may assign any name
    function EmpService($http) {

        // Declares the var service and assigns it the object this (in this case, the DeptService). Any function or
        // variable that you attach to service will be exposed to callers of DeptService, e.g., search.controller.js
        // and register.controller.js
        var service = this;

        // EXPOSED DATA MODELS -----------------------------------------------------------------------------------------
        // EXPOSED FUNCTIONS -------------------------------------------------------------------------------------------
        // TODO: 3.2 Expose retrieveNonManagers function
        service.retrieveNonManagers = retrieveNonManagers;


        // FUNCTION DECLARATION AND DEFINITION -------------------------------------------------------------------------
        // TODO: 3.1 Create function that would retrieve non managers from server.
        // retrieveNonManagers retrieves employees that are currently not department managers from the server via HTTP
        // GET. Parameters: None. Returns: Promise object
        function retrieveNonManagers() {
            return $http({
                method: 'GET'
                , url: 'api/employees'
            });
        }
    }
})();