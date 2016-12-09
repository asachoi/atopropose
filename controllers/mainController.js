mainApp.controller('mainController', ['$scope', '$state', '$translate',
    function ($scope, $rootScope, $translate, $state, svcFactory) {
        $translate.use('en');

        //svcFactory.sayHello('hello');

        $scope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams) {
                $scope.currentstate = toState.name;
            });


        $rootScope.stateObj = {
            settings: {
                isSamePerson: true
            },
            customers:
            [
                {
                    guid: guid(),
                    source: 'PE',
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
            }
            ,
            riders: [
            ]
        };

        $rootScope.settingObj = {
            products: [
                {
                    productid: 'Enrich',
                    plans: [
                        { planid: 'UL111', plantype: ['dbo'] },
                        { planid: 'UL112' },
                        { planid: 'UL113' },
                        { planid: 'UL121' },
                        { planid: 'UL122' },
                        { planid: 'UL123' },
                        { planid: 'UL211' },
                        { planid: 'UL212' },
                        { planid: 'UL213' },
                        { planid: 'UL221' },
                        { planid: 'UL222' },
                        { planid: 'UL223' },
                        { planid: 'UM111' },
                        { planid: 'UM112' },
                        { planid: 'UM113' },
                        { planid: 'UM121' },
                        { planid: 'UM122' },
                        { planid: 'UM123' },
                        { planid: 'UM211' },
                        { planid: 'UM212' },
                        { planid: 'UM213' },
                        { planid: 'UM221' },
                        { planid: 'UM222' },
                        { planid: 'UM223' },
                        { planid: 'UL105' },
                        { planid: 'UL205' },
                        { planid: 'UM105' },
                        { planid: 'UM205' },
                        { planid: 'UL110' },
                        { planid: 'UL210' },
                        { planid: 'UM110' },
                        { planid: 'UM210' }
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

        //$rootScope.state = 'xxx';// toState;

    }]);