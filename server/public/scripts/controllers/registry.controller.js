// registry controller
registryApp.controller('RegistryController', ["$http", function ($http) {
	console.log('registry controller running');
	var self = this;
	self.newRegistry = {};
	self.identities = [];
	getRegistry();

	self.addRegistry = function () {
		console.log('new registry: ', self.newRegistry);
		$http.post('/routes/heroes', self.newRegistry)
			.then(function (response) {
				console.log('POST finished. Get heroes.');
				getRegistry();
			});
	};

	// get hero to edit if needed
	function getRegistry() {
		$http.get('/heroes')
			.then(function (response) {
				self.identities = response.data;
				console.log('Hero Data Get ' + self.identities);
			});
	}

	// delete registry
	self.deleteRegistry = function (registryObj) {
		$http.delete('/heroes' + registryObj.id)
			.then(function (response) {
				console.log('DELETE finished. Get registry again.');
				getRegistry();
			});
	};

	// edit registry
	self.editRegistry = function (registryObj) {
		$http.put('/heroes' + registryObj.id, registryObj)
			.then(function (response) {
				console.log('Edited registry' + registryObj);
				getRegistry();
			});
	};
}]);
