angular.module('mainApp')
.controller('projectPageController', function($scope, $routeParams, $location, dataService, SweetAlert) {

  const id = $routeParams.id

  dataService.getProjectPage(id)
  .then(data => {
      $scope.project = data.data.data
      $scope.creator = data.data.creator
      console.log($scope.project, '  ', $scope.creator)
      })

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

const deleteAllProjectPage = function(){
  dataService.deleteAllProjectPage(id)
  .then( () => $location.path('/home'))
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
    deleteAllProjectPage()
    SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
  } else {
    SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
  }
});

}

$scope.followProject = function(){

  dataService.addFavouritesPage(id)
  .then( data => {
    console.log(data.data)
    if(data.data === 'Added to favourites'){
      SweetAlert.swal({
        title: 'Added to favourites',
        type: 'info',
      })
    }else{
      SweetAlert.swal({
        title: 'Project already following',
        type: 'info',
        })
      }
    })
    }

    $scope.clickMeToShowMessageEdit = function(options) {
      $scope.options = options
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