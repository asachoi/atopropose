mainApp.controller('mainController', ['$scope', '$state', '$translate', function ($scope, $rootScope, $translate, $state) {
    $translate.use('en');

    $rootScope.$state = $state;
    
    $rootScope.stateObj = {
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

    $rootScope.settingObj = {
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
                productid: 'SH',
                plans: [
                    { planid: 'HI100' }
                ]
            }
        ],
        riders: [
            { riderid: 'TDW' },
            { riderid: 'ADB' },
            { riderid: 'HIB65' },
            { riderid: 'TL' },
            { riderid: 'MDB85' },
            { riderid: 'FIB' },
            { riderid: 'OPT' },
            { riderid: 'DDD' }



        ],
        product_rider: [
            {
                productid: 'SH',
                riders: [
                    {
                        riderid: 'OPT',
                        holderagemin: 18,
                        holderagemax: 55,
                        insureragemin: null,
                        insureragemax: null
                    },
                    {
                        riderid: 'DDD',
                        holderagemin: 18,
                        holderagemax: 55,
                        insureragemin: null,
                        insureragemax: null
                    }
                ],
                plan_riders: [
                    {
                        planid: 'HI100',
                        riders: [
                            'OPT', 'DDD'
                        ]
                    },
                ]
            },
            {
                productid: 'ADM',
                riders: [
                    {
                        riderid: 'TDW',
                        holderagemin: 15,
                        holderagemax: 60,
                        insureragemin: null,
                        insureragemax: null
                    },
                    {
                        riderid: 'ADB',
                        holderagemin: 1,
                        holderagemax: 65,
                        insureragemin: null,
                        insureragemax: null
                    }
                    ,
                    {
                        riderid: 'HIB65',
                        holderagemin: 15,
                        holderagemax: 55,
                        insureragemin: null,
                        insureragemax: null
                    },
                    {
                        riderid: 'TL',
                        holderagemin: 0,
                        holderagemax: 65,
                        insureragemin: null,
                        insureragemax: null
                    },
                    {
                        riderid: 'MDB85',
                        holderagemin: 18,
                        holderagemax: 55,
                        insureragemin: null,
                        insureragemax: null
                    },
                    {
                        riderid: 'FIB',
                        holderagemin: 18,
                        holderagemax: 55,
                        insureragemin: null,
                        insureragemax: null
                    }
                ],
                plan_riders: [
                    {
                        planid: 'ADM01',
                        riders: [
                            'TDW', 'ADB', 'HIB65', 'MDB85'
                        ]
                    },
                    {
                        planid: 'ADM02',
                        riders: [
                            'TDW', 'ADB', 'HIB65', 'MDB85', 'FIB'
                        ]
                    },
                    {
                        planid: 'ADM03',
                        riders: [
                            'TDW', 'ADB', 'HIB65', 'MDB85', 'TL'
                        ]
                    }
                ]
            }
        ]
    };

    $scope.stateObj = $rootScope.stateObj;
    $scope.settingObj = $rootScope.settingObj;


}]);