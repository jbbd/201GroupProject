'use strict';

//var newUser = [];
var getForm = document.getElementById('main-form');
function User(username, review, location, rating){
  this.username = username;
  this.review = review;
  this.location = location;
  this.rating = rating;
  userArray.push(this);
  this.getUserRating();
}

function onSubmit(event) {
  event.preventDefault();
  console.log('form filled');

  var userName = event.target.userName.value;
  var userComment = event.target.userComment.value;
  var userLocation = event.target.userLocation.value;
  var userRating = event.target.userRating.value;
  var newUser = [userName, userComment, userLocation, userRating];

  localStorage.setItem('userdata', JSON.stringify(newUser));
}


getForm.addEventListener('submit', onSubmit);
