'use strict';
//Feel free to modify
var restroomList = []; //stores all restroom instances
var userRestrooms = []; //list of restrooms based on user specs
var restroomDataArray = [];

function Restroom(name, address, clean, customersOnly, needles, singleS, multiS, size, accessibility,
  genderN, changingStation, dispensers, toiletPaper){
  this.name = name;
  this.address = address;
  this.clean = clean;
  this.customersOnly = customersOnly;
  this.needles = needles;
  this.stallsChoice = singleS; //bool
  this.size = size;
  this.hAccess = accessibility; //bool
  this.genderNeutral = genderN; //array?
  this.changingStation = changingStation; //bool
  this.dispensers = dispensers; //bool
  this.toiletPaper = toiletPaper;//bool
  restroomList.push(this);
  userRestrooms.push(this);
}

// function User(username, totalReviews, review){
//   this.username = username;
//   this.numOfReviews = totalReviews;
//   this.review = review;
// }
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

var formEl = document.getElementById('hello');
function onSubmit(event) {
  console.log(event.target.elements[0].value, 'event');
  console.log(event.target.elements[0].value, 'event');

  event.preventDefault();
  console.log('work plz');
  var form = {
    newName: event.target.newName.value,
    newAddress: event.target.newAddress.value,
    newClean: event.target.newClean.value,
    newCust: event.target.customers.value,
    newNeedleDis: event.target.needles.value,
    newSingleS: event.target.stallsChoice.value,
    newSize: event.target.stallSize.value,
    newAccessibility: event.target.handicap.value,
    newChangingStation: event.target.changingStation.value,
    newToiletPaper: event.target.toiletPaper.value,
    newGenderN: event.target.genderN.value,
    newDispensers: event.target.dispensers.value,
  };
  var restroomData = [form.newName, form.newAddress, form.newClean, form.newCust, form.newNeedleDis, form.newSingleS, form.newMultiS, form.newSize, form.newAccessibility, form.newGenderN, form.newChangingStation, form.newDispensers, form.newToiletPaper];
  restroomDataArray.push(restroomData);
  console.log('fuuuuckyou', restroomDataArray);
  localStorage.setItem('restrooms', JSON.stringify(restroomDataArray));


  //get click event
}
formEl.addEventListener('submit', onSubmit);
console.log();// getInput(){
