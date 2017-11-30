'use strict';
//Feel free to modify
var restroomList = []; //stores all restroom instances
var userRestrooms = []; //list of restrooms based on user specs
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
}

function User(username, review, restroomName){
  this.username = username;
  //this.numOfReviews = totalReviews;MAKE STRETCH GOAL
  this.review = review;
  this.restroomName = restroomName;
  restroomReview.push(this);
  console.log('what users do we have', restroomReview);
}
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

// function printCustHeader(){
//   var pCust = document.getElementById('user-info');
//   var newThing = document.createElement('h1');
//   var userHeader = document.createTextNode ('NAME: ' + this.username + ' REVIEWS: ' + this.numOfReviews);
//   newThing.appendChild(userHeader);
//   pCust.appendChild(newThing);
// }
// function printCustPar(){
//   var userComment = document.getElementById('user-comments');
//   var userParEl = document.createElement('p');
//   var userTextEl = document.createTextNode('Comments: ' + this.review);
//   userParEl.appendChild(userTextEl);
//   userComment.appendChild(userParEl);
// }

function createDiv(list){
  var blah = document.getElementById('hello');
  for (var i = 0; i < list.length; i++){
    var newDiv = document.createElement('div');
    newDiv.appendChild(list[i]);
    blah.appendChild(newDiv);
  }

}
function createList(array){//THIS TAKES THE LIST ARRAY
  var key;
  var listArr = [];
  for (var i = 0; i < restroomList.length; i++){//for each item in the array...
    var listEl = document.createElement('ul');//create unordered list
    for (key in restroomList[i]){//For each key in the list...
      console.log(restroomList[i]);
      var listItemEl = document.createElement('li');//create a list item
      listItemEl.textContent = restroomList[i][key];//Give that list item a key
      listEl.appendChild(listItemEl);
    }listArr.push(listEl);
  }
  return listArr;
}
// Test to see if everything works.
function test(){//testing
  var list = createList(restroomList);
  createDiv(list);
}
