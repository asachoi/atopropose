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

                $scope.getBaseProductPlans = function (productid) {                    //var products = ;
                    var p = $filter('filter')($scope.settingObj.products, { productid: productid })[0];
                    var plans =[];
                    for(i=0; i < p.plantypes.length; i++) {
                        var pt = p.plantypes[i];
                        plans = plans.concat(pt.plans);
                        
                    }
                    console.debug(plans);
                    return plans;
                }

                $scope.isBasicPlan = function(productid, planid) {
                    if (planid == null) return 0;
                    var pl = this.getPlanList(productid);
                    var rs = $filter('filter')(pl, { planid: planid });
                    var customfields = rs[0].customfields; 
                    //alert(customfields);
                    return  customfields==null?0:customfields;                    
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
                    if(productid == null || planid ==null) return;
                    var p = $filter('filter')($scope.settingObj.products, { productid: productid });
                    var rs = $filter('filter')(p[0].plans, { planid: planid });
                    
                    return rs;
                }

            }
        });


});