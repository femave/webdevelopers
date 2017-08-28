angular.module('mainApp')

.controller('startProjectController', function ($scope, $window, dataService) {

	// $scope.allTags = [];

	// $scope.myTags =[];

	// $scope.loadTags = function(query) {
	// 	return $scope.allTags;
	// };

	// $scope.tags = ['Tag1', 'Tag2', 'Tag3'];
	$scope.submit = function(){
		let {title = "", tags = "", dev = "", image = "", shortDesc = "", longDesc = "", whyThisProject = ""} = $scope
		dataService.projectTags(title, tags, dev, image, shortDesc, longDesc, whyThisProject)
		.then(() => {$window.location.reload();})
	}


	$('.myAffix2').affix({
		offset: {
			top: 230
		}
	})

})


// .directive('elemAsAttr', function($compile) {
// 	return {
// 		restrict: 'A',
// 		require: '?ngModel',
// 		replace: true,
// 		scope: true,
// 		compile: function(tElement, tAttrs) {
// 			return function($scope) {
// 				var attrs = tElement[0].attributes;

// 				var attrsText = '';
// 				for (var i=0; i < attrs.length; i++) {
// 					var attr = attrs.item(i);
// 					if (attr.nodeName === "elem-as-attr") {
// 						continue;
// 					}
// 					attrsText += " " + attr.nodeName + "='" + attr.nodeValue + "'";        
// 				}

// 				var hasModel = $(tElement)[0].hasAttribute("ng-model");
// 				var innerHtml = $(tElement)[0].innerHTML;
// 				var html = '<' + tAttrs.elemAsAttr  + attrsText + '>' + innerHtml + '</' + tAttrs.elemAsAttr + '>';

// 				var e = hasModel ? $compile(html)($scope) : html;
// 				$(tElement).replaceWith(e);
// 			};
// 		}
// 	}
// });
