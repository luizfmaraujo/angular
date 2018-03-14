angular.module("listatelefonica").config(function ($routeProvider) {
	$routeProvider.when("/contato", {
		templateUrl: "view/contato.html"
		}
	)
	$routeProvider.otherwise({redirectTo: "/contato"});
});