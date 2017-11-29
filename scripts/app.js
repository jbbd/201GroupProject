'use strict';
//Feel free to modify
var restroomList = []; //stores all restroom instances
var userRestrooms = []; //list of restrooms based on user specs

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

function User(username, totalReviews, review){
  this.username = username;
  this.numOfReviews = totalReviews;
  this.review = review;
}
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
//NOTETHIS: APPEND LISTS TO DIV - CREATE MULTIPLE DIVS TO HOLD EACH ARRAY?
function createList(array){//THIS TAKES THE LIST ARRAY
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
}
//TESTING
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
