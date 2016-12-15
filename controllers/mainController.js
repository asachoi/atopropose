mainApp.controller('mainController',
    ['$scope', '$rootScope', '$translate', '$http', 'productServices', 
        function ($scope, $rootScope, $translate, $http, productServices) {
            $scope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    $scope.currentstate = toState.name;
                });

            $rootScope.stateObj = productServices.loadInitState();
            $rootScope.settingObj = productServices.loadProducts();
            $scope.stateObj = $rootScope.stateObj;
            $scope.settingObj = $rootScope.settingObj;

            //$rootScope.state = 'xxx';// toState;

        }]);