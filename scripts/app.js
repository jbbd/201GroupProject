'use strict';
//Feel free to modify
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
  this.userRatings = [];//push user ratings to this array
  this.totalRating;//take userRatings and average
  restroomList.push(this);
  this.setTotalRatings();
}

Restroom.prototype.setTotalRatings = function(){
  var total;
  for (var x in this.userRatings){total += x;}
  this.totalRating = total;
};

function User(username, storeName, rating, totalReviews, review){
  this.username = username;
  this.storeName = storeName;
  this.rating = rating;//Tues, Nov 28.
  this.numOfReviews = totalReviews;
  this.review = review;
  getUserRatings();
}
User.prototype.getUserRatings = function(){
  for (var i = 0; i < restroomList.length; i++){
    if (restroomList[i].name === this.storeName){//if (instance.name === user store name input)
      restroomList[i].userRatings.push(this.rating);//push user rating to instance.userRatings array
    }
  }
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

// var userSpecs = {//for form input
//   onClick(){
//     //get click event
//   },
//   getInput(){
//     //get data from form input and put into new restroom object
//   },
//   setList(){
//     //populate userRestrooms array
//   },
//   getList(){
//     //displays list to page
//   },
// };

// function saveData (){
//   //store data into storage
// }
// function clearData(){
//   //clears data from storage
// };

// function createSectionEl(){
//   //creates Section element for bathroom list
// }
// function createPhotoEl(){
//   //creates a photo element to append to section
// }
