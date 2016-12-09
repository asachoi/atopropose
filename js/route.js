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
                $scope.$state = $rootScope.$id;
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

                $scope.getProductList = function () {
                    return $scope.settingObj.products;
                }

                $scope.getPlanList = function (productid) {                    //var products = ;
                    var p = $filter('filter')($scope.settingObj.products, { productid: productid });
                    return p[0].plans;
                }



            }
        })
        .state('form.rider', {
            url: '/rider',
            cache: false,
            templateUrl: 'views/form/rider.html??cb=' + cachebuster,
            controller: function ($scope, $rootScope, $filter, $state) {
                $scope.current = $state.current;
                $scope.baseObj = $scope.$parent.$parent.stateObj;
                $scope.settingObj = $scope.$parent.$parent.settingObj;

                $scope.getRiderList = function (productid, planid) {                    //var products = ;
                    var p = $filter('filter')($scope.settingObj.products, { productid: productid });

                    var rs = $filter('filter')(p[0].plans, { planid: planid });
                    //console.debug(rs);
                    return rs;
                }

            }
        });


});