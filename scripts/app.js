'use strict';
//Feel free to modify
var restroomList = []; //stores all restroom instances
var userRestrooms = []; //list of restrooms based on user specs

function restroom(name, clean, size, accessibility, orientation, changingStation, dispensers, toiletPaper, code){
  this.name = name;
  this.clean = clean; //bool
  this.size = size;
  this.hAccess = accessibility; //bool
  this.orientation = orientation; //array?
  this.changingStation = changingStation; //bool
  this.dispensers = dispensers; //bool
  this.toiletPaper = toiletPaper;//bool
  this.code = []//array holding bool, code (if applicable).
  // this.location = location; //Stretch goal? Used for map data.
}

var userSpecs = {
  onClick(){
    //get click event
  },
  getInput(){
    //get data from form input and put into new restroom object
  },
  setList(){
    //take data from restroom object
  },
  getList(){
    //take data from restroom object
  },
  storeData(){
    //store data into storage
  },
};
