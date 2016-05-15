app.controller('HomeController', ['$scope','contacts', function($scope, contacts) {
	$scope.posts = contacts.posts

	$scope.addContact = function() {
		var newName = $scope.name;
		var newPhone = $scope.phone;
		var newEmail= $scope.email;
		if (!$scope.name || $scope.name === "") {
			return
		}

		$scope.posts.push({
			id: $scope.posts.length +1,
			name: newName,
			phone: newPhone,
			email:newEmail,
			comments: [],
		});

		$scope.name = ""; 
        $scope.phone = "";
		$scope.email = "";
	};
	
}]);