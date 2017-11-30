'use strict';


var getForm = document.getElementById('main-form');


function onSubmit(event) {
  event.preventDefault();
  console.log('form filled');

  var userName = event.target.userName.value;
  var userComment = event.target.userComment.value;
  var userLocation = event.target.userLocation.value;
  var userRating = event.target.userRating.value;
  var newUser = [userName, userComment, userLocation, userRating]; //OLD
  var newUser = new User(userName, userComment, userLocation, userRating);
  //DOOT: WILL NOT WORK WHILE APP.JS: Lines 76/77 are on
  //May be html crap
  localStorage.setItem('newUser', JSON.stringify(newUser));
}
getForm.addEventListener('submit', onSubmit);

function parseAndGet() {
  if (JSON.parse(localStorage.getItem('productList') !== null)){
    var output = localStorage.getItem('productList');
    restroomReview.push(JSON.parse(output));
  }
}parseAndGet();
