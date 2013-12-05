'use strict';

var getCarMakesURL = "http://www.carqueryapi.com/api/0.3/?cmd=getMakes";
var getCarModelFromMakeURL = "http://www.carqueryapi.com/api/0.3/?cmd=getModels&make=";

angular.module('carsApp', [])
.controller('myAppController', ['$scope', '$http',
    function($scope,$http) {

        $scope.listViewData = [];

        $scope.fetchCarMakes = function() {
            $.mobile.loading( "show" );
            $scope.listViewData = [];
            $http({method: 'GET', url: getCarMakesURL}).
                success(function(data, status, headers, config) {
                $.each(data,function(index,obj){
                     $.each(obj,function(index,makesDetails){
                        switch (makesDetails.make_country) {
                            case "Italy":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "italy.png",id: makesDetails.make_id});
                            break;
                            case "UK":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "uk.png",id: makesDetails.make_id});
                            break;
                            case "USA":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "usa.png",id: makesDetails.make_id});
                            break;
                            case "Germany":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "germany.png",id: makesDetails.make_id});
                            break;
                            case "China":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "china.png",id: makesDetails.make_id});
                            break;
                            case "France":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "france.png",id: makesDetails.make_id});
                            break;
                            case "Romania":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "romania.png",id: makesDetails.make_id});
                            break;
                            case "South Korea":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "southKorea.png",id: makesDetails.make_id});
                            break;
                            case "Netherlands":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "netherlands.png",id: makesDetails.make_id});
                            break;
                            case "Japan":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "japan.png",id: makesDetails.make_id});
                            break;
                            case "Russia":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "russia.png",id: makesDetails.make_id});
                            break;
                            case "Australia":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "australia.png",id: makesDetails.make_id});
                            break;
                            case "Taiwan":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "taiwan.png",id: makesDetails.make_id});
                            break;
                            case "India":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "india.png",id: makesDetails.make_id});
                            break;
                            case "Switzerland":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "switzerland.png",id: makesDetails.make_id});
                            break;
                            case "Sweden":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "sweden.png",id: makesDetails.make_id});
                            break;
                            case "Spain":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "spain.png",id: makesDetails.make_id});
                            break;
                            case "Czech Republic":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "czechRepublic.png",id: makesDetails.make_id});
                            break;
                            case "Serbia":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "serbia.png",id: makesDetails.make_id});
                            break;
                            case "Ukraine":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "ukraine.png",id: makesDetails.make_id});
                            break;
                            case "Denmark":
                            $scope.listViewData.push({name: makesDetails.make_display,countryFlag: "denmark.png",id: makesDetails.make_id});
                            break;
                        }                         
                        
                     });
                 });
                setTimeout(function(){
                    $("#dataListView").listview("refresh");
                     $.mobile.loading( "hide" );
                },100);
                }).
                error(function(data, status, headers, config) {                
                    alert("error");
                });            
        }

        $scope.fetchModels = function(makeName){            
            $.mobile.loading( "show" );
            $scope.listViewData = [];
            var modelMakeURL = getCarModelFromMakeURL + makeName.id;
            console.log(modelMakeURL);
            $http({method: 'GET', url: modelMakeURL}).
                success(function(data, status, headers, config) {
                    //console.log(data);
                $.each(data,function(index,obj){
                      $.each(obj,function(index,modelDetails){
                        $scope.listViewData.push({name: modelDetails.model_name,countryFlag: makeName.countryFlag,id: modelDetails.model_make_id});                        
                      });
                  });
                setTimeout(function(){
                    $("#dataListView").listview("refresh");
                      $.mobile.loading( "hide" );
                    },100);
                }).
                error(function(data, status, headers, config) {                
                     alert("error");
                });            
        }                
}])