'use strict';
//Feel free to modify
var restroomList = []; //stores all restroom instances
var userRestrooms = []; //list of restrooms based on user specs

function restroom(name, address, clean, size, accessibility, orientation, changingStation, dispensers, toiletPaper, code){
  this.name = name;
  this.address = address;
  this.clean = clean; //bool
  this.size = size;
  this.hAccess = accessibility; //handicap accessible / bool
  this.orientation = orientation; //array?
  this.changingStation = changingStation; //bool
  this.dispensers = dispensers; //bool
  this.toiletPaper = toiletPaper;//bool
  this.code = []; //holds bool, code (if applicable).
  // this.location = location; //Stretch goal? Used for map data.
  restroomList.push(this);
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
//Does this belong in method?
// var onClick = function(){
//   //get click event
// };
var storeData = function (){
  //store data into storage
};
var clearData = function (){
  //clears data from storage
};
