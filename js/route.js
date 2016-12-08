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
                //$scope.baseObj = $scope.$parent.$parent.stateObj;
                $scope.$state = $rootScope.$id;
            }
        })
        .state('form', {
            url: '/form',
            cache: false,
            templateUrl: 'views/form.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope) {
                //$scope.baseObj = $scope.$parent.$parent.stateObj;
                $scope.setDisable = function (section) {
                    console.debug(section);
                }
            }
        })
        .state('form.customer', {
            url: '/customers',
            cache: false,
            templateUrl: 'views/form/customer.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope) {
                $scope.baseObj = $scope.$parent.$parent.stateObj;
                $scope.settingObj = $scope.$parent.$parent.settingObj2;

                $scope.updateSamePerson = function () {
                    //alert( $scope.$parent.$parent.isSamePerson );
                    //$scope.$parent.$parent.stateObj.isSamePerson =  $scope.isSamePerson;
                }
            }
        })
        .state('form.baseplan', {
            url: '/baseplan',
            cache: false,
            templateUrl: 'views/form/baseplan.html?cb=' + cachebuster,
            controller: function ($scope, $rootScope, $filter) {
                $scope.baseObj = $scope.$parent.$parent.stateObj;
                $scope.settingObj = $scope.$parent.$parent.setting_Obj;

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
            controller: function ($scope, $rootScope) {
                $scope.baseObj = $scope.$parent.$parent.stateObj;
                $scope.settingObj = $scope.$parent.$parent.setting_Obj;
                //$scope.$state = $scope.$state;          

            }
        });


});