angular.module('app')

.factory('Auth', function(){

  var auth = function(){};

  auth.state = 'login';

  auth.toggle = function(){
    var loginForm = document.getElementsByClassName('login-form')[0];
    var registerForm = document.getElementsByClassName('register-form')[0];

    if(loginForm.style.display === 'none'){
      loginForm.style.display = 'inline-block';
      registerForm.style.display = 'none';
      auth.state = 'login';
    } else {
      registerForm.style.display = 'inline-block';
      loginForm.style.display = 'none';
      auth.state = 'register';
    }
  }

  return auth;
})