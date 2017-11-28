'use strict';

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

//implimenting a comment text box and button
// function leaveComment () {
//   var elComment = document
// }
//salmon cookies. EDIT
// function commentDisplay () {
//   var commentSpace = document.createElement('div');
//   var commentText = document.createElement('p');
//   commentSpace.appendChild(commentText);
//   console.log('comments', commentDisplay);
// }
//STORES ARRAY 'STORES' NEW INSTANCES OF STORE
var stores = []; //NEED STORES ARRAY
var grossHourly = []; //NEED GROSS HOURLY
var hours = ['']; //NEED HOURS ARRAY
function Store(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.hourlyCookies = [];
  stores.push(this);
  this.getHourlyCookies();
}
//GET RANDOM NUMBER
function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

//Instances
Store.prototype.getHourlyCookies = function() {
  // iterate over the hours array to do a thing for each hour
  for(var i = 0; i < hours.length; i++) {
    // create a number of cookies for each hour, push to array, and add to daily total
    this.hourlyCookies.push(Math.floor(this.getCustomersPerHour() * this.avgCookies));
    this.dailyTotal += this.hourlyCookies[i];
  }
  console.log(this.hourlyCookies);
  return this.hourlyCookies;
};
Store.prototype.getCustomersPerHour = function() {
  // returns a random number specific to the instance which called this method
  return getRandomNum(this.minCust, this.maxCust);
};

//CREATES INSTANCES OF STORE
//NEW STORES WITHOUT NEW VALUES WORK!!!
new Store('1st and Pike');
console.log(stores);
createTable();

//CREATE TABLES ----- TAKEN FROM SCOTT'S LAB BECAUSE I COULD NOT MAKE IT ANY BETTER
function createTable() {
  var tableEl = document.getElementById('data');
  tableEl.appendChild(createTableHead());
}

function createTableHead() {
  var theadEl = document.createElement('thead');
  var headRow = createTableRow('', hours, 'Totals');
  theadEl.appendChild(headRow);
  return theadEl;
}

function createTableBody() {
  var tbodyEl = document.createElement('tbody');

  for(var k = 0; k < stores.length; k++) {
    var bodyRow = createTableRow(stores[k].name, stores[k].hourlyCookies, stores[k].dailyTotal);
    tbodyEl.appendChild(bodyRow);
  }
  return tbodyEl;
}

function createTableRow(verticalHeader, dataPoints, verticalFooter) {
  var trEl = document.createElement('tr');
  var tdElOne = document.createElement('td');
  tdElOne.textContent = verticalHeader;
  trEl.appendChild(tdElOne);
  for(var j = 0; j < dataPoints.length; j++) {
    var tdElTwo = document.createElement('td');
    tdElTwo.textContent = dataPoints[j];
    trEl.appendChild(tdElTwo);
  }
  var tdElThree = document.createElement('td');
  tdElThree.textContent = verticalFooter;
  trEl.appendChild(tdElThree);
  return trEl;
}

var sectionEl = document.getElementById('main-form');


function onSubmit(event) {
  event.preventDefault();
  console.log('Form filled');
  var storeData = {
  };
  storeData.storeName = event.target.storeName.value;//get store name
  // below adds new store name for new table row. aka new comment
  var newStore = new Store(storeData.storeName);
  // Append data to table
  addRow(newStore.name, newStore.dailyTotal);
}

function addRow(name, hourlyTotal, dailyTotal){
  console.log('name', name);
  var tRow = document.createElement('tr');//create table row
  var tData = document.createElement('td');//create table data
  tData.textContent = name;//create text content of store name name
  tRow.appendChild(tData);//append name location to row

  for (var i = 0; i < hourlyTotal.length; i++){
    var tData2 = document.createElement('td');//create table data
    tData2.textContent = hourlyTotal[i];//create text content of total
    tRow.appendChild(tData2);//append table data to row
  }
  var tData3 = document.createElement('td');
  tData3.textContent = dailyTotal;
  tRow.appendChild(tData3);
  document.getElementById('data').appendChild(tRow);

  return tRow;
}
//EVENT LISTENER
sectionEl.addEventListener('submit', onSubmit);
