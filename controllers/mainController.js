mainApp.controller('mainController', ['$scope', '$state', '$translate', function ($scope, $rootScope, $translate, $state) {
    $translate.use('en');

    $scope.stateObj = {
        settings: {
            isSamePerson: true
        },
        customers:
        [
            {
                role: 'insurer',
                smoking: 'S',
                firstname: ''
            },
            {
                role: 'policyholder',
                smoking: 'S',
                firstname: ''
            }
        ],
        product: {
            productid: 'TDW',
            planid: 'RPUL'
        }
        ,
        riders: [
            { riderid: 'PRB20' },
            { riderid: 'PRB25' }
        ]

    };

    //delete $rootScope.settingObj2;

    $scope.setting_Obj = {
        products: [
            {
                productid: 'TDW',
                plans: [
                    { planid: 'RPUL' },
                    { planid: 'EN20' },
                    { planid: 'EN65' },
                    { planid: 'WL' }
                ]
            },
            {
                productid: 'ABD',
                plans: [
                    { planid: 'RPUL' },
                    { planid: 'EN20' },
                    { planid: 'EN65' },
                    { planid: 'WL' }
                ]
            }
        ]
    };

}]);