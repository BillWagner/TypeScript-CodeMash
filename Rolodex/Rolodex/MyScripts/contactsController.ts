/// reference path="../Scripts/typings/angularjs/angular.d.ts" />


var contactsApp: ng.IModule;

module Rolodex {

    interface IContact {
        first: string;
        last: string;
        address: string;
        city: string;
        state: string;
        zipCode: number;
        cellPhone: number;
        homePhone: number;
        workPhone: number;
        showDetails: boolean
    }


    interface IContactsScope extends ng.IScope {
        sortOrder: string;
        hideMessage: string;
        showMessage: string;
        contacts: IContact[];
        toggleShowDetails: (contact: IContact) => boolean;
    }

    contactsApp.controller('ContactsController',
        function ContactsController($scope: IContactsScope, contactData) {
            $scope.sortOrder = 'last';
            $scope.hideMessage = "Hide Details";
            $scope.showMessage = "Show Details";
            $scope.contacts = contactData.getContacts();
            $scope.toggleShowDetails = function (contact) {
                contact.showDetails = !contact.showDetails;
                return contact.showDetails;
            }
    });
}
