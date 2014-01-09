/// reference path="../Scripts/typings/angularjs/angular.d.ts" />
var contactsApp;

var Rolodex;
(function (Rolodex) {
    var ContactsController = (function () {
        function ContactsController($scope, contactData) {
            $scope.sortOrder = 'last';
            $scope.hideMessage = "Hide Details";
            $scope.showMessage = "Show Details";
            $scope.contacts = contactData.getContacts();
            $scope.toggleShowDetails = function (contact) {
                contact.showDetails = !contact.showDetails;
                return contact.showDetails;
            };
        }
        return ContactsController;
    })();
    Rolodex.ContactsController = ContactsController;
})(Rolodex || (Rolodex = {}));

contactsApp.controller('ContactsController', Rolodex.ContactsController);
//# sourceMappingURL=contactsController.js.map
