mainApp.config(function ($mdIconProvider, $mdThemingProvider, $stateProvider, $urlRouterProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('orange');

    $mdIconProvider.fontSet('md', 'material-icons');

    $urlRouterProvider.otherwise('/list');

    $stateProvider
        .state('list', {
            url: '/list',
            cache: false,
            templateUrl: 'views/list.html?cb=' + cachebuster
            ,
            controller: function ($scope, $rootScope) {
                $scope.title = 'title_list';
            }
        })
        .state('form', {
            url: '/form',
            cache: false,
            templateUrl: 'views/form.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $state) {
                //$scope.state = $state;

                $scope.baseObj = $rootScope.stateObj;
                $scope.settingObj = $scope.$parent.$parent.settingObj;
                $scope.title = 'title.form';

                $scope.setDisable = function (section) {
                    //console.debug(section);
                    return true;
                   
                }
            }
        })
        .state('form.customer', {
            url: '/customers',
            cache: false,
            templateUrl: 'views/form/customer.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $state) {
                $scope.current = $state.current;
                $scope.baseObj = $rootScope.stateObj;
                $scope.settingObj = $rootScope.settingObj;


                $scope.updateSamePerson = function () {
                    $rootScope.settings.customerFormComplete = $scope.userForm.$valid;
                }
            }
        })
        .state('form.baseplan', {
            url: '/baseplan',
            cache: false,
            templateUrl: 'views/form/baseplan.html?cb=' + cachebuster,
            controller: ['$scope', '$rootScope', '$filter', '$state', 'productServices',
                function ($scope, $rootScope, $filter, $state, productServices) {
                    $scope.current = $state.current;
                    $scope.baseObj = $rootScope.stateObj;
                    $scope.settingObj = $rootScope.settingObj;

                    $scope.test = function() {
                        console.debug('test start');
                        console.debug(productServices.getProductGroup('Enrich'));
        console.debug(productServices.getProduct('Enrich', 'RPUL.UL122'));
        console.debug(productServices.getPlan('Enrich', 'RPUL.UL122'));                        
                        //console.de
                        //productServices.test();
                    }
                    //productServices.getProductGroup('MC');
                    $scope.getProductGroupList = function () {
                        //alert(productServices.getProductGroupList());
                        return productServices.getProductGroupList();
                    }

                    $scope.getProduct = function (productid) {
                        return productServices.getProductGroup(productid);
                        //return $filter('filter')($rootScope.settingObj.products, { productid: productid })[0];
                        //return productServices.getProductGroup(productid);
                    }

                    $scope.getPlan = function (productid, planid) {
                        return productServices.getPlan(productid, planid);

                    }

                    $scope.changePlan = function () {
                        if($scope.baseObj.product.planid==null) return;
                        var planTypeID = $scope.baseObj.product.planid.split('.')[0];
                        var product = $scope.getProduct($scope.baseObj.product.productid);
                        var producttype = $filter('filter')(product.plantypes, { plantype: planTypeID })[0];

                        $scope.selectedPlan = $scope.getPlan($scope.baseObj.product.productid, $scope.baseObj.product.planid);
                        $scope.selectedPlanType = producttype;
                    }

                    $scope.getBaseProductPlans = function (productid) {
                        var p = $scope.getProduct(productid);                         
                        if(p==null ) return;
                        
                        var plans = [];

                        for (i = 0; i < p.plantypes.length; i++) {

                            var pt = p.plantypes[i];

                            for (j = 0; j < pt.plans.length; j++) {
                                var ptt = pt.plans[j];
                                ptt.plantype = pt.plantype;
                                plans = plans.concat(ptt);
                            }
                        }

                        return plans;
                    }

                }]
        })
        .state('form.rider', {
            url: '/rider',
            cache: false,
            templateUrl: 'views/form/rider.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $filter, $state) {
                $scope.current = $state.current;
                $scope.baseObj = $rootScope.stateObj;
                $scope.settingObj = $rootScope.settingObj;

                $scope.getRiderList = function (productid, planid) {
                    if (productid == null || planid == null) return;
                    var p = $filter('filter')($scope.settingObj.products, { productid: productid });
                    var rs = $filter('filter')(p[0].plans, { planid: planid });
                    return rs;
                }

            }
        })
        .state('form.summary', {
            url: '/summary',
            cache: false,
            templateUrl: 'views/form/summary.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $filter, $state) {
                $scope.current = $state.current;
                $scope.baseObj = $rootScope.stateObj;
                $scope.settingObj = $rootScope.settingObj;
            }
        })
        ;


});