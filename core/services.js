mainApp.service('coreSvcs', function () {
    this.loadProducts = function () {
        var productMaster =
            {
                products: [
                    {
                        productid: 'Enrich',
                        productname: 'OLD MCBL',
                        plantypes: [
                            {
                                plantype: 'RPUL', //regular pay unilink
                                planname: 'Regular Pay',
                                customfields: 'RPUL',
                                plans: [
                                    {
                                        planid: 'UL111',
                                        planname: '',
                                        currency: 'PHP',
                                        famultipliermin: 15,
                                        famultipliermax: 49,
                                        deathbenefit: 'DB Option 1 (Face Plus)',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL112',
                                        planname: '',
                                        currency: 'PHP',
                                        famultipliermin: 20,
                                        famultipliermax: 50,
                                        deathbenefit: 'DB Option 1 (Face Plus)',
                                        fundcode: 'SGF',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133'],
                                    },
                                    {
                                        planid: 'UL113',
                                        planname: ''
                                    },
                                    {
                                        planid: 'UL121',
                                        planname: ''
                                    },
                                    {
                                        planid: 'UL122',
                                        planname: ''
                                    },
                                    {
                                        planid: 'UL123',
                                        planname: ''
                                    },
                                    {
                                        planid: 'UL211',
                                        planname: ''
                                    },
                                    {
                                        planid: 'UL212',
                                        planname: ''
                                    },
                                    {
                                        planid: 'UL213',
                                        planname: ''
                                    },
                                    {
                                        planid: 'UL221',
                                        planname: ''
                                    },
                                    {
                                        planid: 'UL222',
                                        planname: ''
                                    },
                                    {
                                        planid: 'UL223',
                                        planname: ''
                                    }
                                ],
                            },
                            {
                                plantype: 'LPUL',//limited pay unilink
                                plans: [
                                    {
                                        planid: 'UM111',
                                        riders: ['AJ070', 'WP133', 'PB005', 'HJ065', 'CR885', 'AD133']
                                    },
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
                                ],
                            },


                        ]
                    },
                    {
                        productid: 'SH',
                        amounttype: 'premiumdriven',
                        plantypes: [
                            {
                                plantype: '',
                                plans: [
                                    { planid: 'HI100' }
                                ]
                            }
                        ]
                    }
                ],
                riders: [
                    {
                        riderid: 'TDW',
                    },
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
        return productMaster;
    };

    this.loadInitState = function () {
        var data = {
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
                    surname: 'Asa'
                },
                {
                    role: 'policyholder',
                    smoking: 'S',
                    firstname: '',
                    surname: ''

                }
            ],
            product: {
            }
            ,
            riders: [
            ]
        };
        return data;
    };


});