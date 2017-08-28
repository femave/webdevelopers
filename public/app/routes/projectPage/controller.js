angular.module('mainApp')
.controller('projectPageController', function($scope, $routeParams, dataService, SweetAlert) {

  const id = $routeParams.id

  dataService.getProjectPage(id)
  .then(data => 
    $scope.project = data.data
    )
  
  $scope.options = true


  $scope.enableEditor = function(toggle) {
    if($scope.options === true){
      if (toggle === 'title') {
        $scope.editorEnabled = true;
      } else if (toggle === 'shortDescription') {
        $scope.editorEnabledSD = true;
      } else if (toggle === 'longDescription') {
        $scope.editorEnabledLD = true;
      } else if (toggle == 'whyThisProject') {
        $scope.editorEnabledWTP = true;
      } else if (toggle == 'developers') {
        $scope.editorEnabledDN = true;
      } else if (toggle == 'tags') {
        $scope.editorEnabledTag = true;
      }
    }
  };

  $scope.disableEditor = function(toggle) {
    if($scope.options === true){
      if (toggle === 'title') {
        $scope.editorEnabled = false;
      } else if (toggle === 'shortDescription') {
        $scope.editorEnabledSD = false;
      } else if (toggle === 'longDescription') {
        $scope.editorEnabledLD = false;
      } else if (toggle == 'whyThisProject') {
        $scope.editorEnabledWTP = false
      } else if (toggle == 'developers') {
        $scope.editorEnabledDN = false;
      } else if (toggle == 'tags') {
        $scope.editorEnabledTag = false;
      }
    }
  };

  $scope.save = function(toggle) {
    const {title, shortDescription, longDescription, whyThisProject} = $scope.project
    const{tags, developers} = $scope
    if (toggle === 'title') {
     dataService.editProjectPage(id, title, toggle)
     .then( data => console.log(data))
   }else if (toggle === 'shortDescription') {
    dataService.editProjectPage(id, shortDescription, toggle)
    .then( data => console.log(data))
  } else if (toggle === 'longDescription') {
    dataService.editProjectPage(id, longDescription, toggle)
    .then( data => console.log(data))
  } else if (toggle === 'whyThisProject') {
    dataService.editProjectPage(id, whyThisProject, toggle)
    .then( data => console.log(data))
  } else if (toggle === 'tags') {
    console.log(tags)
    $scope.project.tags.push($scope.tags)
    dataService.editProjectPage(id, tags, toggle)
    .then( data => console.log(data))
  } else if (toggle === 'developers') {
    $scope.project.developers.push($scope.developers)
    dataService.editProjectPage(id, developers, toggle)
    .then( data => console.log(data))
  }

  $scope.disableEditor(toggle);
};

$scope.deleteDev = function(index) {
  const toggle = 'developers'
  const developers = $scope.project.developers.splice(index, 1)

  dataService.deleteProjectPage(id, developers, toggle)
  .then( data => console.log(data))
}

$scope.deleteTag = function(index) {
  const toggle = 'tags'
  const tags = $scope.project.tags.splice(index, 1)
  dataService.deleteProjectPage(id, tags, toggle)
  .then( data => console.log(data))
}

$scope.clickMeToShowMessage = function() {
  let self = this
  SweetAlert.swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d9534f',
    cancelButtonColor: '#337ab7',
    confirmButtonText: 'Yes, delete it!',
    closeOnConfirm: false,
    closeOnCancel: false,
  }, function(isConfirm){ 
   if (isConfirm) {
      
      SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
   } else {
      SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
   }
});

  }

  $scope.clickMeToShowMessageEdit = function() {
    if($scope.options === true){
      SweetAlert.swal({
        title: 'Edit mode ON',
        text: "You can edit content!",
        type: 'info',
      })
    }
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