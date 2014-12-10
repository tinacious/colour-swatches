'use strict';

angular.module('colourSwatchesApp', [])
  .controller('MainController', function ($scope) {
    $scope.clientWebsite = 'Client Name';
    $scope.clientNameFooter = 'Client Name';

    $scope.colours = [
      { name: 'orange', code: 'ffa629' },
      { name: 'green', code: '2fff83' },
      { name: 'raspberry', code: 'fb006f' }
    ];
  });
