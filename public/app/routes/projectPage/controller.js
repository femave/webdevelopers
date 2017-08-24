angular.module('mainApp')
.controller('projectPageController', function($scope, SweetAlert) {

	$scope.title = 'Brooks Warth'
	$scope.shortDescription = 'Lorem ipsum dolor si Lorem ipsum dolor s Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor si'
	$scope.devNeeded = {
		'dev': ['designer', 'back-end', 'front-end']
	}
	$scope.longDescription = 'dellenite falconelle semisteel ecospecifically thunderflower Hippocratic tusche geonoma Urticastrum senselessly milden neuropsychological wheezle uncorked increscence unstoic diesel bassarisk shampoo soc temalacatl unvaulting outtower oriency flocker physicologic contradictional Didelphidae horseflesh pronator Varanoid gymnasial partnership multitarian renotification unbiographical osela Sicambrian reminiscitory mangi Mara friskful insapient uncherishing euthermic aggression hydromania subaqueanJacobinical castoreum Mirounga circumnutate unswell Datism Klondiker pseudepiscopy friary thereat nondevelopable overdoctrinize insectean conation beaver ochronotic Brissotine machinal roseine Hepatica gridiron gucki ironfisted procollectivistic'
	$scope.whyThisProject = 'dellenite falconelle semisteel ecospecifically thunderflower Hippocratic tusche geonoma Urticastrum senselessly milden neuropsychological wheezle uncorked increscence unstoic diesel bassarisk shampoo soc temalacatl unvaulting outtower oriency flocker physicologic contradictional Didelphidae horseflesh pronator Varanoid gymnasial partnership multitarian renotification unbiographical osela Sicambrian reminiscitory mangi Mara friskful insapient uncherishing euthermic aggression hydromania subaqueanJacobinical castoreum Mirounga circumnutate unswell Datism Klondiker pseudepiscopy friary thereat nondevelopable overdoctrinize insectea'
	$scope.editorEnabled = false


	$scope.enableEditor = function(toggle) {
		console.log(toggle)
		if (toggle === 'title') {
			$scope.editorEnabled = true;
		} else if (toggle === 'shortDescription') {
			$scope.editorEnabledSD = true;
		} else if (toggle === 'longDescription') {
			$scope.editorEnabledLD = true;
		} else if (toggle == 'whyThisProject') {
			$scope.editorEnabledWTP = true;
		} else if (toggle == 'developerNeeded') {
			$scope.editorEnabledDN = true;
		}
	};

	$scope.disableEditor = function(toggle) {
		if (toggle === 'title') {
			$scope.editorEnabled = false;
		} else if (toggle === 'shortDescription') {
			$scope.editorEnabledSD = false;
		} else if (toggle === 'longDescription') {
			$scope.editorEnabledLD = false;
		} else if (toggle == 'whyThisProject') {
			$scope.editorEnabledWTP = false
		} else if (toggle == 'developerNeeded') {
			$scope.editorEnabledDN = false;
		}
	};

	$scope.save = function(toggle) {
		console.log(toggle)
		console.log($scope.developerNeeded)
		if (toggle === 'developerNeeded') {
			$scope.devNeeded.dev.push($scope.developerNeeded)
			console.log($scope.devNeeded.dev)
		}
		$scope.disableEditor(toggle);
	};

	$scope.deleteDev = function(index) {
		console.log(index)
		$scope.devNeeded.dev.splice(index, 1)
		console.log($scope.devNeeded.dev)
	}

	$scope.clickMeToShowMessage = function() {

		SweetAlert.swal({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#d9534f',
			cancelButtonColor: '#337ab7',
			confirmButtonText: 'Yes, delete it!'
		})
	}

	$('.myAffix').affix({
		offset: {
			top: 475,
			bottom: function () {
				return (this.bottom = $('.footer').outerHeight(true))
			}
		}
	})



})