'use strict';

var userArray = [];
var getForm = document.getElementById('main-form')
function User(username, review){
  this.username = username;
  this.review = review;
}
function onSubmit(event) {
  event.preventDefault();
  console.log('form filled');

  var userName = event.target.storeName.value;
  var userComment = event.target.userComment.value;
  var newUser = new User (userName, userComment);
  userArray.push(newUser);
  console.log ('user array: ', userArray);
}
getForm.addEventListener('submit', onSubmit);
