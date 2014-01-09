/// reference path="../Scripts/typings/angularjs/angular.d.ts" />

var contactsApp: ng.IModule;

module Rolodex {
    export class ContactDataServer {
        contacts: IContact[] = [
            {
                first: "Tom",
                last: "Riddle",
                address: "66 Shack St",
                city: "Little Hangleton",
                state: "Mississippi",
                zipCode: 54565,
                cellPhone: 6543654321,
                homePhone: 4532332133,
                workPhone: 6663420666,
                showDetails: true
            },
            {
                first: "Antonin",
                last: "Dolohov",
                address: "28 Kaban Ln",
                city: "Gideon",
                state: "Arkensas",
                zipCode: 98767,
                cellPhone: 4443332222,
                homePhone: 5556667777,
                workPhone: 9897876765,
                showDetails: true
            },
            {
                first: "Evan",
                last: "Rosier",
                address: "28 Dominion Ave",
                city: "Notting",
                state: "New Jersey",
                zipCode: 23432,
                cellPhone: 1232343456,
                homePhone: 4432215565,
                workPhone: 3454321234,
                showDetails: true
            }
        ];

        getContacts() {
            return this.contacts;
        }
    
        addContact(contact: IContact) {
            this.contacts.push(contact);
            return this.contacts;
        }
    }
}

contactsApp.factory('contactsData', () => new Rolodex.ContactDataServer());