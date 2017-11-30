'use strict';

var newUserArray = [];
var getForm = document.getElementById('main-form');
// function User(username, review, location, rating){
//   this.username = username;
//   this.review = review;
//   this.location = location;
//   this.rating = rating;
//   userArray.push(this);
//   this.getUserRating();
// }

function onSubmit(event) {
  //event.preventDefault();
  console.log('form filled');

  var userName = event.target.userName.value;
  var userComment = event.target.userComment.value;
  var userLocation = event.target.userLocation.value;
  var userRating = event.target.userRating.value;
  var newUser = [userName, userComment, userLocation, userRating];
  newUserArray.push(newUser);

  localStorage.setItem('userdata', JSON.stringify(newUserArray));
}


getForm.addEventListener('submit', onSubmit);
