var cachebuster = Math.round(new Date().getTime() / 1000);

var mainApp = angular.module('mainApp', 
['ngMaterial', 'ngStorage', 'ui.router', 'pascalprecht.translate']);

 






mainApp.directive('compileTemplate', function ($compile, $parse) {
    return {
        link: function (scope, element, attr) {
            var parsed = $parse(attr.ngBindHtml);
            function getStringValue() {
                return (parsed(scope) || '').toString();
            }

            // Recompile if the template changes
            scope.$watch(getStringValue, function () {
                $compile(element, null, -9999)(scope);  // The -9999 makes it skip directives so that we do not recompile ourselves
            });
        }
    }
});


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}