'use strict';

var userArray = [];
var getForm = document.getElementById('main-form');
function User(username, review, location, rating){
  this.username = username;
  this.review = review;
  this.location = location;
  this.rating = rating;
  userArray.push(this);
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

  localStorage.setItem('userArray', JSON.stringify(userArray));
  userArray.push(JSON.parse(localStorage.getItem('userArray')));

  console.log ('user array: ', userArray);
}
getForm.addEventListener('submit', onSubmit);
