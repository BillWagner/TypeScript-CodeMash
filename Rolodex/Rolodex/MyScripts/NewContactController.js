'use strict';

contactsApp.controller('NewContactController', function NewContactController($scope, contactData) {
    $scope.saveContact = function (contact, form) {
        if (form.$valid)
            console.log(contactData.addContact(contact));
        else console.log("form is invalid");
    }
});