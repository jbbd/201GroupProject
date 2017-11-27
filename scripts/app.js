'use strict';
//Feel free to modify
var restroomList = []; //stores all restroom instances
var userRestrooms = []; //list of restrooms based on user specs

function restroom(name, address, clean, singleS, multiS, size, accessibility,
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

function user(username, reviews){
  this.username = username;
  this.numOfReviews = reviews;
}

var userSpecs = {//for form input
  onClick(){
    //get click event
  },
  getInput(){
    //get data from form input and put into new restroom object
  },
  setList(){
    //populate userRestrooms array
  },
  getList(){
    //displays list to page
  },
};

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
