mainApp.controller('mainController',
    ['$scope', '$rootScope', '$translate', '$http', 'coreSvcs', 
        function ($scope, $rootScope, $translate, $http, coreSvcs) {
            $scope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    $scope.currentstate = toState.name;
                });
 
console.debug(coreSvcs);
            $rootScope.stateObj = coreSvcs.loadInitState();

            $rootScope.settingObj = coreSvcs.loadProducts();



            $scope.stateObj = $rootScope.stateObj;
            $scope.settingObj = $rootScope.settingObj;

            //$rootScope.state = 'xxx';// toState;

        }]);