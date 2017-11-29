'use strict';

var userArray = [];
var getForm = document.getElementById('main-form');
function User(username, review, location, rating){
  this.username = username;
  this.review = review;
  this.location = location;
  this.rating = rating;
}

function onSubmit(event) {
  event.preventDefault();
  console.log('form filled');

  var userName = event.target.userName.value;
  var userComment = event.target.userComment.value;
  var userLocation = event.target.userLocation.value;
  var userRating = event.target.userRating.value;
  var newUser = new User (userName, userComment, userLocation, userRating);
  userArray.push(newUser);

  console.log ('user array: ', userArray);
}
getForm.addEventListener('submit', onSubmit);
