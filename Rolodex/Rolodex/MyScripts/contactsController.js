/// reference path="../Scripts/typings/angularjs/angular.d.ts" />
var contactsApp;

var Rolodex;
(function (Rolodex) {
    contactsApp.controller('ContactsController', function ContactsController($scope, contactData) {
        $scope.sortOrder = 'last';
        $scope.hideMessage = "Hide Details";
        $scope.showMessage = "Show Details";
        $scope.contacts = contactData.getContacts();
        $scope.toggleShowDetails = function (contact) {
            contact.showDetails = !contact.showDetails;
            return contact.showDetails;
        };
    });
})(Rolodex || (Rolodex = {}));
//# sourceMappingURL=contactsController.js.map
