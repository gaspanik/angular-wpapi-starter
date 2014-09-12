(function() {
  'use strict';

  var app = angular.module('yourApp', ['ngResource']);

  app.factory('Post', function($resource) {
    return $resource('Your-json-rest-api');
  });

})();
