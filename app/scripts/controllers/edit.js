'use strict';

angular.module('provaClientApp')
  .controller('EditCtrl', function ($scope) {
  	var popoverForm = $('.popForm');

  	popoverForm.popover({
      title: "Filds Form",
      html: true,
      placement: "bottom",
      content:function(){
        return $('<div/>').html($('.pop').clone());
      }
    });

    $('.edit').popover({
      title: "Filds Form",
      html: true,
      placement: "left",
      content:function(){
        return $('<div/>').html($('.pop').clone());
      }
    });

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
