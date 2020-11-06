angular.module("phoneList").controller('phoneListController', function ($scope, contactAPI, providerAPI, serialGenerator, uppercaseFilter, lowercaseFilter) {
    $scope.app = 'Phone List';
    
    // Initilizations
    $scope.contacts = [];
    $scope.providers = [];
    $scope.regexPhone = /^\d{4,5}-\d{4}$/;
    $scope.regexCpf = /^\d{3}.\d{3}.\d{3}-\d{2}$/;

    async function loadContacts() {
        contactAPI.getContacts()
            .success((data) => {
                $scope.contacts = data.map(contact => ({
                    ...contact,
                    name: uppercaseFilter(contact.name),
                    provider: { ...contact.provider, name: lowercaseFilter(contact.provider.name) },
                    serial: serialGenerator.generate()
                }));
                $scope.error = undefined;
            })
            .error(() => {
                $scope.error = "Server is down, please try again later"
            })
    }

    async function loadProviders() {
        providerAPI.getProviders().success((data) => {
            $scope.providers = data;
        })
    }

    // Recieves a contact to be created
    $scope.addToContacts = (contact) => {
        contactAPI.createContact(contact).success((data) => {
            $scope.contacts.push(data);
        });

        // Angular.copy avoids reference problems creating a new instance of the object instead of change the object by reference
        // $scope.contacts.push(angular.copy(contact));

        // returns formContact to pristine, like it have never been changed. So error messages are cleared
        $scope.formContact.$setPristine();

        // delete contact instance which was just inserted to the list.
        delete $scope.contact;
    }

    $scope.removeFromContacts = (index) => {
        $scope.contacts.splice(index, 1);
    }

    $scope.removeSelectedContacts = (contacts) => {
        $scope.contacts = contacts.filter((contact) => !contact.selected);
    }

    $scope.orderBy = (field) => {
        $scope.orderByField = field;
        $scope.orderByDirection = !$scope.orderByDirection;
    }

    $scope.checkSelected = (contacts) => {
        return contacts.some(contact => contact.selected);
    }

    loadContacts();
    loadProviders();
})