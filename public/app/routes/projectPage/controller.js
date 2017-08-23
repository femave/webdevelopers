angular.module('mainApp')

.controller('projectPageController', function ($scope) {

	$scope.title = 'Brooks Warth'
	$scope.shortDescription = 'Lorem ipsum dolor si Lorem ipsum dolor s Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si'
	$scope.devNeeded = ['designer', 'back-end']
	$scope.longDescription = 'dellenite falconelle semisteel ecospecifically thunderflower Hippocratic tusche geonoma Urticastrum senselessly milden neuropsychological wheezle uncorked increscence unstoic diesel bassarisk shampoo soc temalacatl unvaulting outtower oriency flocker physicologic contradictional Didelphidae horseflesh pronator Varanoid gymnasial partnership multitarian renotification unbiographical osela Sicambrian reminiscitory mangi Mara friskful insapient uncherishing euthermic aggression hydromania subaqueanJacobinical castoreum Mirounga circumnutate unswell Datism Klondiker pseudepiscopy friary thereat nondevelopable overdoctrinize insectean conation beaver ochronotic Brissotine machinal roseine Hepatica gridiron gucki ironfisted procollectivistic'
	$scope.whyThisProject = 'dellenite falconelle semisteel ecospecifically thunderflower Hippocratic tusche geonoma Urticastrum senselessly milden neuropsychological wheezle uncorked increscence unstoic diesel bassarisk shampoo soc temalacatl unvaulting outtower oriency flocker physicologic contradictional Didelphidae horseflesh pronator Varanoid gymnasial partnership multitarian renotification unbiographical osela Sicambrian reminiscitory mangi Mara friskful insapient uncherishing euthermic aggression hydromania subaqueanJacobinical castoreum Mirounga circumnutate unswell Datism Klondiker pseudepiscopy friary thereat nondevelopable overdoctrinize insectea'

	$scope.editorEnabled = false


	$scope.enableEditor = function(toggle) {
		console.log(toggle)
		if(toggle === 'title'){
			$scope.editorEnabled = true;
		}else if(toggle === 'shortDescription'){
			$scope.editorEnabledSD = true;
		}else if(toggle === 'longDescription'){
			$scope.editorEnabledLD = true;
		}else if(toggle == 'whyThisProject'){
			$scope.editorEnabledWTP = true;
		}
	};

	$scope.disableEditor = function(toggle) {
		if(toggle === 'title'){
			$scope.editorEnabled = false;
		}else if(toggle === 'shortDescription'){
			$scope.editorEnabledSD = false;
		}else if(toggle === 'longDescription'){
			$scope.editorEnabledLD = false;
		}else if(toggle == 'whyThisProject'){
			$scope.editorEnabledWTP = false
		}
	};

	$scope.save = function(toggle) {
		$scope.disableEditor(toggle);
	};
})
