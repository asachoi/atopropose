var cachebuster = Math.round(new Date().getTime() / 1000);

var mainApp = angular.module('mainApp', ['ngMaterial', 'ngStorage', 'ui.router', 'pascalprecht.translate']);





mainApp.filter('YesNo', function () {
    return function (x) {
        //alert(x);
        if (x == 'S') return 'Standard';
        return x ? 'Yes' : 'No';
    };
});

mainApp.filter('Age', function () {
    return function (birthday) { // birthday is a date
        if (birthday == null)
            return '';
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

});





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


Array.prototype.select = function (closure) {
    for (var n = 0; n < this.length; n++) {
        if (closure(this[n])) {
            return this[n];
        }
    }

    return null;
};

