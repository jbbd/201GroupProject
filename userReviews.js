'use strict';
//Feel free to modify
var restroomList = []; //stores all restroom instances
//var userRestrooms = []; //list of restrooms based on user specs
var restroomReview = [];
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
//var userArray = [];
var userData = [];
function Restroom(name, address, clean, singleS, multiS, size, accessibility,
  genderN, changingStation, dispensers, toiletPaper){
  this.name = name;
  this.address = address;
  this.clean = clean;
  this.singleStall = singleS; //bool
  this.multiStall = multiS; //bool
  this.size = size;
  this.hAccess = accessibility; //bool
  this.genderNeutral = genderN; //array?
  this.changingStation = changingStation; //bool
  this.dispensers = dispensers; //bool
  this.toiletPaper = toiletPaper;//bool
  restroomList.push(this);
  console.log('what restrooms do we have: ', restroomList);
}
function User(username, review, location, rating){
  this.username = username;
  this.review = review;
  this.location = location;
  this.rating = rating;
  restroomReview.push(this);
  console.log('what user reviews we have: ', restroomReview);
  //this.getUserRating();
}
// function User(username, review, restroomName){
//   this.username = username;
//   //this.numOfReviews = totalReviews;MAKE STRETCH GOAL
//   this.review = review;
//   this.restroomName = restroomName;
//   restroomReview.push(this);
//   console.log('what users do we have', restroomReview);
// }
//USER METHODS
User.prototype.printCustHeader = function(){
  var pCust = document.getElementById('review-list');
  var newHeaderEl = document.createElement('header');
  var newThing = document.createElement('h1');
  var userHeader = document.createTextNode ('NAME: ' + this.username + '  Location: ' + this.restroomName);
  newThing.appendChild(userHeader);
  newHeaderEl.appendChild(newThing);
  pCust.appendChild(newHeaderEl);
};
User.prototype.printCustReview = function(){
  var userComment = document.getElementById('review-list');
  var userCommentDiv = document.createElement('div');
  var userParEl = document.createElement('p');
  var userTextEl = document.createTextNode('Comments: ' + this.review);
  userParEl.appendChild(userTextEl);
  userCommentDiv.appendChild(userParEl);
  userComment.appendChild(userCommentDiv);
};
User.prototype.printEverything = function(){
  this.printCustHeader();
  this.printCustReview();
};
//RESTROOM METHODS
Restroom.prototype.printRestroomHeader = function(){
  var getSection = document.getElementById('restroomStats');
  var headerEl = document.createElement('header');
  var header = document.createElement('h1');
  var headerText = document.createTextNode ('NAME: ' + this.name);
  header.appendChild(headerText);
  headerEl.appendChild(header);
  getSection.appendChild(headerEl);
};
Restroom.prototype.printRestroomStats = function(name, key){
  //var textEl = this.printRestroomItem(this.address);
  var restroomStats = document.getElementById('restroomStats');
  //for (var i = 0; i < restroomList.length; i++){
  var listEl = document.createElement('ul');//create unordered list
  restroomStats.appendChild(listEl);
  listEl.appendChild(this.printRestroomItem(name));
  listEl.appendChild(this.printRestroomItem(key));
};

Restroom.prototype.printRestroomItem = function (key) {
  var listItemEl = document.createElement('li');
  var textEl = document.createTextNode(key);
  return listItemEl.appendChild(textEl);
};
//cloud user
// userArray.push(JSON.parse(localStorage.getItem('userArray')));
// localStorage.clear();

// function setData () {
//   localStorage.clear;
//   var data = JSON.stringify(newProductArray);//taking info from current storage
//   localStorage.setItem('stored data', data);//putting into local storage
// }
function getData () {
  var storedReview = JSON.parse(localStorage.getItem('userdata'));//getlocal data
  console.log('stored values: ', storedReview);
  userData.push(storedReview);
//if(storedReview !== null) {//if there's info in local storage..
  //userArray = storedReview;//set current storage of newProductArray to the locally stored array
}
getData();

//Hard coded - CHANGE WHEN NECESSARY
new Restroom('Pike Place', '123 East Blah BLah', true, true, false, 'big', true,
  true, false, true, true);
new Restroom('Valhalla', '123 West gah gah', true, true, false, 'big', true,
  true, false, true, true);
new Restroom('Verona', '123 North cha cha', true, true, false, 'big', true,
  true, false, true, true);
new Restroom('Eorzea', '123 West gah gah', true, true, false, 'big', true,
  true, false, true, true);
new Restroom('Midgard', '123 North cha cha', true, true, false, 'big', true,
  true, false, true, true);

// //Hard coded users
new User (userData[0][0], userData[0][1], userData[0][2], userData[0][3]);
// new User('tinkleBell', loremIpsum, restroomList[2].name);
// new User('WestCoastBestCoast', loremIpsum, restroomList[2].name);
// new User('RowdyRuffGurl', loremIpsum, restroomList[1].name);
// new User('Lincoln-Logger', loremIpsum, restroomList[3].name );
