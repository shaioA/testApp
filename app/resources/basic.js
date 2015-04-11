/**
 * Created by AntecPC on 4/11/2015.
 */


(function (){
    'use strict';

    //var app = angular.module('blogApp');
    //get data from json
    app.factory('basicService', function ($http, $q){

        return {
            savePair: function (pair) {
                var defer = $q.defer();

                $http.post('http://168.63.96.84:1978/savePair', {
                    pair: pair
                }).success(function (data, status) {
                    defer.resolve(data);
                });

                return defer.promise;
            },

            labelText: 'allPosts',
            typeOfSearch: 'filterAll',
            quantity: 0
        };

        //return $http.get('data/posts.json');

    });



}());

