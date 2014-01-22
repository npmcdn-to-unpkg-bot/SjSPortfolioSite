var App = angular.module('App', ['ngRoute','ngSanitize']);

function AppController($scope, $http) {

  //set json to scope
  $http.get('scripts/port.json').success(function(data) {
    $scope.waka = data;
  });

  //after render
  $scope.$on('$viewContentLoaded', function() {
    setTimeout(function() {
        $('.homepage-text').animate({"left":"252px", "opacity":1}, "slow")
    }, 200);
  });

}

//image on load ( after render )
App.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                $('img').fadeIn(800);
            });
        }
    };
});


// configuring our routes
App.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'views/home.html',
      controller  : 'mainController'
    })
    .when('/microsite', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'micrositeController'
    })
    .when('/useful', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'usefulscriptsController'
    })
    .when('/healthy', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'healthyController'
    })
    .when('/hackney', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'hackneyController'
    })
    .when('/registration', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'registrationController'
    })
    .when('/cake', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'cakeController'
    })
    .when('/apfci', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'apfciController'
    })
    .when('/design', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'designController'
    })
    .when('/fascist', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'fascistController'
    })
    .when('/starter', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'starterController'
    })
    .when('/bottled', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'bottledController'
    })
    .when('/oldport', {
      templateUrl : 'views/mainInfo.html',
      controller  : 'oldportController'
    })
    .when('/contact', {
      templateUrl : 'views/contact.html',
      controller  : 'contactController'
    })
    .when('/mpersons', {
      templateUrl : 'views/mpersons.html',
      controller  : 'missingpersonController'
    })
    .when('/misc', {
      templateUrl : 'views/platformman.html'
    })
    .when('/photography', {
      templateUrl : 'views/photography.html',
      controller  : 'missingpersonController'
    })
    .otherwise({
      templateUrl : 'views/home.html',
      controller  : 'mainController'
    });
});

// create the controller and inject Angular's $scope
App.controller('mainController', function($scope) {
  // nothing yet
});
App.controller('micrositeController', function($scope) {
  $scope.waka = $scope.waka.sites[0]
});
App.controller('usefulscriptsController', function($scope) {
  $scope.waka = $scope.waka.sites[1]
});
App.controller('healthyController', function($scope) {
  $scope.waka = $scope.waka.sites[2]
});
App.controller('hackneyController', function($scope) {
  $scope.waka = $scope.waka.sites[3]
});
App.controller('registrationController', function($scope) {
  $scope.waka = $scope.waka.sites[4]
});
App.controller('cakeController', function($scope) {
  $scope.waka = $scope.waka.sites[5]
});
App.controller('apfciController', function($scope) {
  $scope.waka = $scope.waka.sites[6]
});
App.controller('designController', function($scope) {
  $scope.waka = $scope.waka.sites[7]
});
App.controller('fascistController', function($scope) {
  $scope.waka = $scope.waka.sites[8]
});
App.controller('starterController', function($scope) {
  $scope.waka = $scope.waka.sites[9]
});
App.controller('bottledController', function($scope) {
  $scope.waka = $scope.waka.sites[10]
});
App.controller('oldportController', function($scope) {
  $scope.waka = $scope.waka.sites[11]
});
App.controller('missingpersonController', function($scope) {
  $scope.waka = $scope.waka.sites[12]
});
App.controller('photographyController', function($scope) {
  $scope.waka = $scope.waka.photography_page
});

App.controller('contactController', function($scope) {
});

//contact form controller
App.controller('formController', ['$scope', function($scope) {
    $scope.name = '';
    $scope.text = '';
    $scope.email = '';

    getEmail = function() {
      var email_stuff = {
          firstName: $scope.name,
          address: $scope.email,
          subject: "Something Interesting?",
          body: $scope.text
      };
      return email_stuff;
    };

    //pressing ENTER
    $scope.submitForm = function() {
      //mailto:{{email_stuff.address}}?subject={{email_stuff.subject}}&body={{email_stuff.body}}
      //$scope.email_stuff = getEmail();
      alert('consoleLogging')
      console.log(getEmail());
    };

}])

/*
$(function(){ 
  
});
*/

