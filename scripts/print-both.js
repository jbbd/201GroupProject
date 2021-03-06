'use strict';
var restroomList = [];
var restroomReview = [];
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';

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

function User(username, review, restroomName){
  this.username = username;
  //this.numOfReviews = totalReviews;MAKE STRETCH GOAL
  this.review = review;
  this.restroomName = restroomName;
  restroomReview.push(this);
  console.log('what users do we have', restroomReview);
}
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

//Hard coded users
new User('tinkleBell', loremIpsum, restroomList[2].name);
new User('WestCoastBestCoast', loremIpsum, restroomList[2].name);
new User('RowdyRuffGurl', loremIpsum, restroomList[1].name);
new User('Lincoln-Logger', loremIpsum, restroomList[3].name );
