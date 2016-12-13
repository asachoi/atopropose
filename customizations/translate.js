mainApp.config(
    function ($translateProvider) {
        $translateProvider.translations('en', {
            TITLE: 'Hello',
            name: 'Name',
            smoker: 'Smoking Status',
            gender: 'Gender',
            FOO: 'This is a paragraph.',
            BUTTON_LANG_EN: 'english',
            BUTTON_LANG_DE: 'german',
            CUSTOMER: 'Customer',
            Pending: 'Pending Proposal',
            customerinfo: 'Customer Information',
            planinfo: 'Plan Information'
        });
        $translateProvider.translations('de', {
            TITLE: 'Hallo',
            FOO: 'Dies ist ein Paragraph.',
            BUTTON_LANG_EN: 'englisch',
            BUTTON_LANG_DE: 'deutsch'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy(null);
    })