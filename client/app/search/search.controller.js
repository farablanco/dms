// TODO: Send and retrieve information from server via Angular $http; modularize via services
// Always use an IIFE, i.e., (function() {})();
(function () {
    // Attaches a SearchCtrl to the DMS module
    angular
        .module("DMS")
        .controller("SearchCtrl", SearchCtrl);

    // Dependency injection. An empty [] means SearchCtrl does not have dependencies
    SearchCtrl.$inject = [];

    // Search function declaration
    function SearchCtrl() {

        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the SearchCtrl). Any
        // function or variable that you attach to vm will be exposed to callers of SearchCtrl, e.g., search.html
        var vm = this;

        // Exposed data models -----------------------------------------------------------------------------------------
        vm.departments = [
            {
                deptNo: 1001,
                deptName: 'Admin'
            }
            , {
                deptNo: 1002,
                deptName: 'Finance'
            }
            , {
                deptNo: 1003,
                deptName: 'Sales'
            }
            , {
                deptNo: 1004,
                deptName: 'HR'
            }
            , {
                deptNo: 1005,
                deptName: 'Staff'
            }
            , {
                deptNo: 1006,
                deptName: 'Customer Care'
            }
            , {
                deptNo: 1007,
                deptName: 'Support'
            }
        ];
    }
})();