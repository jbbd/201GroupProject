'use strict';
//GLOBAL VARIABLES
var restroomList = []; //stores all restroom instances
//var userRestrooms = []; //list of restrooms based on user specs
var restroomReview = [];//stores all user instances
var restroomData = [];
var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ';
//var userArray = [];
var userData = [];
var restroomDataArray = [];
var newUser = [];

//Global Functions________________________________________
function getUserData () {
  var storedReview = JSON.parse(localStorage.getItem('userdata'));//getlocal data
  console.log('stored values: ', storedReview);
  userData.push(storedReview);
//if(storedReview !== null) {//if there's info in local storage..
  //userArray = storedReview;//set current storage of newProductArray to the locally stored array
}
function getRestroomData () {
  var storedRestrooms = JSON.parse(localStorage.getItem('restrooms'));//getlocal data
  console.log('stored values: ', storedRestrooms);
  restroomData.push(storedRestrooms);
}


function createDiv(list){//THIS TAKES A VARIABLE THAT STORES THE RESULT OF CREATELIST()
  var newDiv = document.createElement('div');
  newDiv.appendChild(list);
  var blah = document.getElementById('hello');
  blah.appendChild(newDiv);
}

function test(){//testing
  var list = createList(restroomList);
  createDiv(list);
}

var getDropDown = document.getElementById('locationDropDown');
function dropDown(){
  for (var i = 0; i < restroomList.length; i++){
    var createOptionEl = document.createElement('OPTION');
    createOptionEl.textContent = restroomList[i].name;
    getDropDown.appendChild(createOptionEl);
  }
}
///OBJECTS____________________________________________________________
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
//this is the old user name function can delete:
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
User.prototype.getUserRating = function(){
  for (var i = 0; i < restroomList.length; i++){
    if (restroomList[i].name === this.location){
      var rating = parseInt(this.rating);
      restroomList[i].userRatings.push(rating);
      restroomList[i].setTotalRatings();
    }
  }
};
// User.prototype.createList = function(array){//THIS TAKES THE LIST ARRAY
//   var key;
//   for (var i = 0; i < restroomList.length; i++){//for each item in the array...
//     var listEl = document.createElement('ul');//create unordered list
//     for (key in restroomList[i]){//For each key in the list...
//       console.log(restroomList[i]);
//       var listItemEl = document.createElement('li');//create a list item
//       listItemEl.textContent = restroomList[i].name;//Give that list item a key
//       listEl.appendChild(listItemEl);
//     }
//   }
//   return listEl;
// };
User.prototype.getUserRating = function(){
  for (var i = 0; i < restroomList.length; i++){
    if (restroomList[i].name === this.location){
      var rating = parseInt(this.rating);
      restroomList[i].userRatings.push(rating);
      restroomList[i].setTotalRatings();
    }
  }
};

User.prototype.createList = function(array){//THIS TAKES THE LIST ARRAY
  var key;
  for (var i = 0; i < restroomList.length; i++){//for each item in the array...
    var listEl = document.createElement('ul');//create unordered list
    for (key in restroomList[i]){//For each key in the list...
      console.log(restroomList[i]);
      var listItemEl = document.createElement('li');//create a list item
      listItemEl.textContent = restroomList[i].name;//Give that list item a key
      listEl.appendChild(listItemEl);
    }
  }
  return listEl;
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
Restroom.prototype.setTotalRatings = function(){
  var total = 0;
  for (var x = 0; x < this.userRatings.length; x++){
    total += this.userRatings[x];
    console.log('total', total);
  }
  this.totalRating = total / this.userRatings.length;
};


//////////////////////////////////////////FUNCTION CALLLS:
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
