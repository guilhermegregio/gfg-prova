/*global $*/
'use strict';

angular.module('provaClientApp')
	.controller('RootCtrl', function ($scope) {
		$scope.messages = [];
		$scope.heightAlert = 0;
		$scope.$on('alertEvent', function (ev, msg) {
			ev.preventDefault();
			$scope.messages = msg.errors;
			$scope.$watch('messages', function(){
				showAlert(msg.status);
			});
		});

		$scope.upAlert = function () {
			$('.alert')[0].style.marginTop = ($scope.heightAlert*-1)+'px';
			setTimeout(function(){
				$('.alert')[0].classList.remove('showAlert');
			}, 500);
		};

		var showAlert = function (status) {
			var alert = $('.alert')[0];
			$scope.heightAlert = alert.offsetHeight;

			if (status === 500) {
				alert.classList.add('alert-error');
			}

			alert.style.marginTop = ($scope.heightAlert*-1)+'px';

			//console.log(window.location.hash, alert.classList.contains('showAlert'));
			setTimeout(function(){
				alert.classList.add('showAlert');
				alert.style.visibility = 'visible';
				alert.style.marginTop = '20px';
			}, 1);
		};
	});