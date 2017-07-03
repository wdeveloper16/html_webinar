'use strict';

/**
 * @ngdoc function
 * @name utahHomeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the utahHomeApp
 */
angular.module('utahHomeApp')
  .controller('MainCtrl',['$scope', function ($scope) {

      $scope.step = 1;
      $scope.searchModel = '';

      $scope.goToStep2 = function () {
        if( $scope.searchModel !== ''){
          $scope.step = 2;
        }
          var map;
          var infoWindow;
          var service;
            var mapOptions = {
              zoom: 14,
              center: new google.maps.LatLng(
                $scope.searchModel.geometry.location.lat(),
                $scope.searchModel.geometry.location.lng()
              )
            };
            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
            infoWindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);
            service.getDetails({
              placeId: $scope.searchModel.place_id

            }, function (result, status) {
              if (status != google.maps.places.PlacesServiceStatus.OK) {
                alert(status);
                return;
              }
              // console.log(result);
              var marker = new google.maps.Marker({
                map: map,
                place: {
                  placeId: $scope.searchModel.place_id,
                  location: result.geometry.location
                }
              });

              // map.setCenter(marker.getPosition());
              var address = result.adr_address;
              var newAddr = address.split("</span>,");
              infoWindow.setContent(result.name + "<br>" + newAddr[0] + "<br>" + newAddr[1] + "<br>" + newAddr[2]);
              google.maps.event.addListener(infoWindow, 'domready', function () {
                map.setCenter(marker.getPosition());
              });
              infoWindow.open(map, marker);
            });

          //google.maps.event.addDomListener(window, 'load', initialize);
      };

      $scope.goToStep3 = function () {
        $scope.step = 3;
      }

  }]);
