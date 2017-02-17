// TODO: Create a search page which displays dummy data (list of departments) and allows users to search
// TODO: (using filter) these data
// TODO: 5. Define a controller for search.html. Name the controller SearchCtrl
// TODO: 6. Create dummy data to be displayed when users enter search.html
// TODO: 6. Dummy data should be an array of department objects; department should have deptNo and deptName
// Always use an IIFE, i.e., (function() {})();
(function () {
    // TODO: 5.2 Attach your controller to the DMS module
    // Attaches a SearchCtrl to the DMS module
    angular
        .module("DMS")
        .controller("SearchCtrl", SearchCtrl);

    // TODO: 5.3 Inject dependencies
    // Dependency injection. An empty [] means SearchCtrl does not have dependencies
    SearchCtrl.$inject = [];

    // TODO: 5.1 Define controller. Call it SearchCtrl
    // Search function declaration
    function SearchCtrl() {
        // TODO: 6.1 Assign this to vm variable

        // Declares the var vm (for ViewModel) and assigns it the object this (in this case, the SearchCtrl). Any
        // function or variable that you attach to vm will be exposed to callers of SearchCtrl, e.g., search.html
        var vm = this;

        // Exposed data models -----------------------------------------------------------------------------------------
        // TODO: 6.2 Initialize an array of objects with properties deptNo and deptName with some dummy data. For
        // TODO: 6.2 example, deptNo: 1020, deptName: Finance
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