/**
 * 
 */

angular.module('myApp')
  .directive('appfooter', function() {
    return {
      templateUrl: 'components/footer.html'
    };
  });

angular.module('myApp')
.directive('appNavigation', function() {
  return {
    templateUrl: 'components/menu.html'
  };
});

angular.module('myApp')
.directive('appHeader', function() {
  return {
    templateUrl: 'components/header.html'
  };
});