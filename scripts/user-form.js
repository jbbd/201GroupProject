'use strict';
var userArray = [];
var getForm = document.getElementById('main-form');

function User(username, review, location, rating){
  this.username = username;
  this.review = review;
  this.location = location;
  this.rating = rating;
  userArray.push(this);
  this.getUserRating();
}
function setData () {
  localStorage.clear;
  var data = JSON.stringify(userArray);//taking info from current storage
  localStorage.setItem('stored data', data);//putting into local storage
}

function onSubmit(event) {
  event.preventDefault();
  console.log('form filled');

  var userName = event.target.userName.value;
  var userComment = event.target.userComment.value;
  var userLocation = event.target.userLocation.value;
  var userRating = event.target.userRating.value;
  new User (userName, userComment, userLocation, userRating);
  setData();

}


getForm.addEventListener('submit', onSubmit);
