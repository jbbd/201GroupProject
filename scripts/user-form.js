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
  event.preventDefault();
  console.log('form filled');
  var userForm = {
    userName: event.taret.userName.value,
    userComment: event.target.userComment.value,
    userLocation: event.target.userLocation.value,
    userRating: event.target.userRating.value,
  };
  var userFormData = [userForm.userName, userForm.userComment, userForm.userLocation, userForm.userRating];
  newUserArray.push(userFormData);
  console.log('newUserArray', newUserArray);
  localStorage.setItem('userdata', JSON.stringify(newUserArray));
}

// var userName = event.target.userName.value;
// var userComment = event.target.userComment.value;
// var userLocation = event.target.userLocation.value;
// var userRating = event.target.userRating.value;
// var newUser = [userName, userComment, userLocation, userRating];
// newUserArray.push(newUser);

// localStorage.setItem('userdata', JSON.stringify(newUserArray));





getForm.addEventListener('submit', onSubmit);
