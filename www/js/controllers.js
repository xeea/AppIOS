angular.module('app.controllers', [])

.controller('loginCtrl', function($scope) {

})

/*.controller('attendanceCtrl', function($scope) {

})*/

.controller('attitudeCtrl', function($scope) {

})

.controller('abilityCtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

.controller('playerMenuCtrl', function($scope) {

})

.controller('pageCtrl', function($scope) {

})

.controller('team1Ctrl', function($scope) {

})

.controller('viewStatsCtrl', function($scope) {

})

  .controller('attendanceCtrl', function($scope, $ionicPopover) {

    $ionicPopover.fromTemplateUrl('templates/attendancePopover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };

    $scope.closePopover = function() {
      $scope.popover.hide();
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });

    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });

    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });
  })

  .controller('attitudeCtrl', function($scope, $ionicPopover) {

    $ionicPopover.fromTemplateUrl('templates/attitudePopover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };

    $scope.closePopover = function() {
      $scope.popover.hide();
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });

    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });

    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });
  })

  .controller('abilityCtrl', function($scope, $ionicPopover) {

    $ionicPopover.fromTemplateUrl('templates/abilityPopover.html', {
      scope: $scope
    }).then(function(popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
      $scope.popover.show($event);
    };

    $scope.closePopover = function() {
      $scope.popover.hide();
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.popover.remove();
    });

    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
      // Execute action
    });

    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
      // Execute action
    });
  })
