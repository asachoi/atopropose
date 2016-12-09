var factories = angular.module('ato.services', []);

factories.factory('User', function () {
  return {
    first: 'John',
    last: 'Doe'
  };
});