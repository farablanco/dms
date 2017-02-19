// TODO: Send and retrieve information from server via Angular $http; modularize via services
// TODO: 1. Define a service that would hold logic related to department
// TODO: 2. Inject the dependency needed to communicate with the server
// TODO: 3. Create a function that accepts registration information and sends this info to server.
// TODO: 3a Name the function insertDept
// TODO: 3b Return promise object to calling controller
// TODO: 3c Expose this function.
// TODO: 11 Create a function called getDeptAll that retrieves all dept information from server using HTTP GET.
// TODO: 11 This function returns a promise object.


// TODO: 1.1 Create an IIFE then call your angular module and attach your service to it. Name the service DeptService
// Always use an IIFE, i.e., (function() {})();
(function () {
    // Attaches DeptService service to the DMS module
    angular
        .module("DMS")
        .service("DeptService", DeptService);

    // TODO: 2.1 Inject $http. We will use this built-in service to communicate with the server
    // Dependency injection. Here we inject $http because we need this built-in service to communicate with the server
    // There are different ways to inject dependencies; $inject is minification safe
    DeptService.$inject = ['$http'];

    // TODO: 1.2 Declare DeptService
    // TODO: 2.2 Accept the injected dependency as a parameter.
    // DeptService function declaration
    // Accepts the injected dependency as a parameter. We name it $http for consistency, but you may assign any name
    function DeptService($http) {

        // TODO: 1.3 Assign this object to a variable named service
        // Declares the var service and assigns it the object this (in this case, the DeptService). Any function or
        // variable that you attach to service will be exposed to callers of DeptService, e.g., search.controller.js
        // and register.controller.js
        var service = this;

        // Exposed data models -----------------------------------------------------------------------------------------
        // Exposed functions -------------------------------------------------------------------------------------------
        // TODO: 3.3 Expose insertDept
        service.insertDept = insertDept;
        // TODO: 11.2 Expose retrieveDept. Arrange in alphabetical order
        service.retrieveDept = retrieveDept;

        // Function declaration and definition -------------------------------------------------------------------------

        // TODO: 3.1 Declare insertDept; insertDept must be a private function; insertDept accepts department
        // TODO: 3.1  information and returns a promise object to the calling function
        // insertDept uses HTTP POST to send department information to the server's /departments route
        // Parameters: department information; Returns: Promise object
        function insertDept(department) {
            // TODO: 3.2 Return the $http promise object to calling function
            // This line returns the $http to the calling function
            // This configuration specifies that $http must send the department data received from the calling function
            // to the /departments route using the HTTP POST method. $http returns a promise object. In this instance
            // the promise object is returned to the calling function
            return $http({
                method: 'POST'
                , url: 'departments'
                , data: {dept: department}
            });
        }


        // TODO: 11.1 Declare retrieveDept; retrieveDept must be a private function; retrieveDept retrieves all dept data
        // TODO: 11.1 from server and returns a promise object
        // retrieveDept retrieves department information from the server via HTTP GET.
        // Parameters: none. Returns: Promise object
        function retrieveDept(){
            return $http({
                method: 'GET'
                , url: 'departments'
            });
        }

    }
})();