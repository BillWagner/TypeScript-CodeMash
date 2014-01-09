/// reference path="../Scripts/typings/angularjs/angular.d.ts" />


var contactsApp: ng.IModule;

interface IContactsScope extends ng.IScope {
    sortOrder: string;
    hideMessage: string;
    showMessage: string;
    contacts: any;
    toggleShowDetails: (contact: any) => boolean;
}

contactsApp.controller('ContactsController',
    function ContactsController($scope : IContactsScope, contactData) {
        $scope.sortOrder = 'last';
        $scope.hideMessage = "Hide Details";
        $scope.showMessage = "Show Details";
        $scope.contacts = contactData.getContacts();
        $scope.toggleShowDetails = function (contact) {
            contact.showDetails = !contact.showDetails;
            return contact.showDetails;
        }
    });

