/// reference path="../Scripts/typings/angularjs/angular.d.ts" />


var contactsApp: ng.IModule;

module Rolodex {

    export interface IContact {
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


    export interface IContactsScope extends ng.IScope {
        sortOrder: string;
        hideMessage: string;
        showMessage: string;
        contacts: IContact[];
        toggleShowDetails: (contact: IContact) => boolean;
    }

    export class ContactsController {
        constructor($scope: IContactsScope, contactData: any) {
            $scope.sortOrder = 'last';
            $scope.hideMessage = "Hide Details";
            $scope.showMessage = "Show Details";
            $scope.contacts = contactData.getContacts();
            $scope.toggleShowDetails = function (contact) {
                contact.showDetails = !contact.showDetails;
                return contact.showDetails;
            }
        }
    }
}

contactsApp.controller('ContactsController', Rolodex.ContactsController);
