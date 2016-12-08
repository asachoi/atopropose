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
            productid: 'ADAM',
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
                productid: 'ADAM',
                plans: [
                    { planid: 'ADM01' },
                    { planid: 'ADM02' },
                    { planid: 'ADM03' }                    
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
        ],
        riders: [
            {riderid: 'TDW'},
            {riderid: 'ADB'},
            {riderid: 'HIB65'},
            {riderid: 'TL'},
            {riderid: 'MDB85'},
            {riderid: 'FIB'}
        ],
        product_rider: [
            {
                productid: 'ADM',
                riders: [
                    {
                        riderid: 'TDW',
                        holderagemin: 15,
                        holderagemax: 60,
                        insureragemin: null,
                        insureragemax: null
                    }
                ],
                plan_riders: [
                    {
                        planid: 'ADM01',
                        riders: [
                            {riderid: 'TDW'},
                            {riderid: 'ADB'},
                            {riderid: 'HIB65'},
                            {riderid: 'MDB85'}
                        ]                        
                    }, 
                    {
                        planid: 'ADM02',
                        riders: [
                            {riderid: 'TDW'},
                            {riderid: 'ADB'},
                            {riderid: 'HIB65'},
                            {riderid: 'MDB85'},
                            {riderid: 'FIB'}
                        ]                        
                    }                    


                ]

                
            }
        ]
    };

}]);