angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PieCtrl', function($scope) {
    console.log("generating data :)");
    $scope.exampleData = [
        {
            key: "One",
            y: 5
        },
        {
            key: "Two",
            y: 2
        },
        {
            key: "Three",
            y: 9
        },
        {
            key: "Four",
            y: 7
        },
        {
            key: "Five",
            y: 4
        },
        {
            key: "Six",
            y: 3
        },
        {
            key: "Seven",
            y: 9
        }
    ];

    $scope.xFunction = function(){
        return function(d) {
            return d.key;
        };
    };

    $scope.yFunction = function(){
        return function(d) {
            return d.y;
        };
    };

    $scope.descriptionFunction = function(){
        return function(d){
            return d.key;
        }
    }
})

.controller('BarCtrl', function($scope) {
    $scope.exampleData = [
        {
            key: "Cumulative Return",
            values: [
                ["A", -29.765957771107 ],
                ["B" , 0 ],
                ["C" , 32.807804682612 ],
                ["D" , 196.45946739256 ],
                ["E" , 0.19434030906893 ],
                ["F" , -98.079782601442 ],
                ["G" , -13.925743130903 ],
                ["H" , -5.1387322875705 ]
            ]
        }
    ];
})
