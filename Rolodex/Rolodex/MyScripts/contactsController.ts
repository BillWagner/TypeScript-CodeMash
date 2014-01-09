/// reference path="../Scripts/typings/angularjs/angular.d.ts" />

contactsApp.controller('ContactsController',
    function ContactsController($scope, contactData) {
        $scope.sortOrder = 'last';
        $scope.hideMessage = "Hide Details";
        $scope.showMessage = "Show Details";
        $scope.contacts = contactData.getContacts();
        $scope.toggleShowDetails = function (contact) {
            contact.showDetails = !contact.showDetails;
        }
    });

