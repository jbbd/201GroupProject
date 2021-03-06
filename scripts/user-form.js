'use strict';

var newUserArray = [];
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
  var userForm = {
    userName: event.target.userName.value,
    userComment: event.target.userComment.value,
    userLocation: event.target.userLocation.value,
    userRating: event.target.userRating.value,
  };
  var formData = [userForm.userName, userForm.userComment, userForm.userLocation, userForm.userRating];
  newUserArray.push(formData);
  console.log('formData', formData);
  console.log('newUserArray', newUserArray);
  localStorage.setItem('users', JSON.stringify(newUserArray));
}
getForm.addEventListener('submit', onSubmit);
var getDropDown = document.getElementById('locationDropDown');
function dropDown(){
  for (var i = 0; i < restroomList.length; i++){
    var createOptionEl = document.createElement('OPTION');
    createOptionEl.textContent = restroomList[i].name;
    getDropDown.appendChild(createOptionEl);
  }
}
dropDown();
