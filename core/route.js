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

                $scope.baseObj = $scope.$parent.$parent.stateObj;
                $scope.settingObj = $scope.$parent.$parent.settingObj;
                $scope.title = 'title.form';

                $scope.setDisable = function (section) {
                    //console.debug(section);
                }
            }
        })
        .state('form.customer', {
            url: '/customers',
            cache: false,
            templateUrl: 'views/form/customer.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $state) {
                $scope.current = $state.current;
                $scope.baseObj = $scope.$parent.$parent.stateObj;
                $scope.settingObj = $scope.$parent.$parent.settingObj;


                $scope.updateSamePerson = function () {
                    $rootScope.settings.customerFormComplete = $scope.userForm.$valid;
                }
            }
        })
        .state('form.baseplan', {
            url: '/baseplan',
            cache: false,
            templateUrl: 'views/form/baseplan.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $filter, $state) {
                $scope.current = $state.current;
                $scope.baseObj = $scope.$parent.$parent.stateObj;
                $scope.settingObj = $scope.$parent.$parent.settingObj;

                $scope.getBaseProduct = function () {
                    return $scope.settingObj.products;
                }

                $scope.getProduct = function (productid) {
                    return $filter('filter')($scope.settingObj.products, { productid: productid })[0];
                }

                $scope.getPlan = function (productid, planid) {
                    if (planid == null) return 0;

                    var plantype = planid.split('.')[0];
                    var pid = planid.split('.')[1];

                    var prd =  $scope.getProduct(productid);

                    var producttype = $filter('filter')(prd.plantypes, {plantype:plantype})[0];
                    var plan = $filter('filter')(producttype.plans, {planid:pid})[0];
                    return plan; 
                }


                $scope.getBaseProductPlans = function (productid) {                    //var products = ;


                    var p = $scope.getProduct(productid);
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

                $scope.isBasicPlan = function (productid, planid) {

                    if (planid == null) return 0;

                    var pl = $filter('filter')($scope.settingObj.products, { productid: productid })[0];
                    var productype = planid.split('.')[0];
                    var rs = $filter('filter')(pl.plantypes, { plantype: productype });
                    console.debug(rs);





                    var customfields = rs[0].customfields;
                    //alert(customfields);
                    return customfields == null ? 0 : customfields;
                }
            }
        })
        .state('form.rider', {
            url: '/rider',
            cache: false,
            templateUrl: 'views/form/rider.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $filter, $state) {
                $scope.current = $state.current;
                $scope.baseObj = $scope.$parent.$parent.stateObj;
                $scope.settingObj = $scope.$parent.$parent.settingObj;

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
                $scope.baseObj = $scope.$parent.$parent.stateObj;
                $scope.settingObj = $scope.$parent.$parent.settingObj;

            }
        })
        ;


});