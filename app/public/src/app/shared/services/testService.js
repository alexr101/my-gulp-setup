angular.module('app')

// It's a singleton
.service('TestService', function(){
  this.name = 'test';
})