'use strict';
var restroomList = []; //stores all restroom instances
var userRestrooms = []; //list of restrooms based on user specs

function Restroom(name, address, clean, singleS, multiS, size, accessibility,
  genderN, changingStation, dispensers, toiletPaper){
  this.name = name;
  this.address = address;
  this.clean = clean;
  this.singleStall = singleS;
  this.multiStall = multiS;
  this.size = size;
  this.hAccess = accessibility;
  this.genderNeutral = genderN;
  this.changingStation = changingStation;
  this.dispensers = dispensers;
  this.toiletPaper = toiletPaper;
  this.userRatings = [];
  this.totalRating = 0;
  restroomList.push(this);
}
Restroom.prototype.setTotalRatings = function(){
  var total = 0;
  for (var x = 0; x < this.userRatings.length; x++){
    total += this.userRatings[x];
    console.log('total', total);
  }
  this.totalRating = total / this.userRatings.length;
};
// function User(username, review, location, rating){
//   this.username = username;
//   this.review = review;
//   this.location = location;
//   this.rating = rating;
//   userArray.push(this);
//   this.getUserRating();
// }
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
dropDown();
