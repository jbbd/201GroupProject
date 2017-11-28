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
var stores = [];

// CANNOT DELETE VAR HOURS
var hours = [''];

function Store (id, min, max, avg){
  this.id = id;
  this.min = min;
  this.max = max;
  this.avg = avg;
  stores.push(this);
}
console.log(Store);

new Store ('1st and Pike', 23, 65, 6.3);
new Store ('SeaTac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 26, 1.2);

Store.prototype.randomCust = function () {
  return Math.round(Math.random() * (this.max - this.min)) + this.min;
};
stores [0].randomCust();

Store.prototype.cookieCount = function () {
  return Math.round(this.avg * this.randomCust());
};
stores [0].cookieCount();


Store.header = function() {
  var tblEl = document.getElementById('table');
  var thead = document.createElement('thead');
  tblEl.appendChild(thead);
  tblEl.setAttribute('style','text-align:center;');
  var trEl = document.createElement('tr');
  thead.appendChild(trEl);
  var tdEl = document.createElement('td');
  //tdEl.setAttribute('style','text-align:center;','border: 1px solid white;');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);
  for(var i = 0; i <= 15; i++) {
    tdEl = document.createElement('td');
    //tdEl.setAttribute('style','text-align:center;');
    var time = hours[i];
    trEl.setAttribute('style','text-align:center;');
    tdEl.textContent = time;
    trEl.appendChild(tdEl);
  }
};
Store.header();

Store.prototype.tableContent = function() {
  var cookiesDay = 0;
  var tblEl = document.getElementById('table');
  var tbody = document.createElement('tbody');
  tblEl.appendChild(tbody);
  var trEl = document.createElement('tr');
  tbody.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = stores[k].id;
  trEl.appendChild(tdEl);
  for(var i = 0; i <= 15; i++) {
    var cookieC = this.cookieCount();
    cookiesDay += cookieC;
    tdEl = document.createElement('td');
    var cookies = cookieC;
    tdEl.textContent = cookies;
    trEl.appendChild(tdEl);
  }
  var dataTotal = document.createElement('td');
  tdEl.textContent = cookiesDay;
  tblEl.appendChild(dataTotal);
};

for(var k = 0; k < 5; k++){
  stores [k].tableContent();
}
// lab-8
var formEl = document.getElementById('main-form');

function onSubmit(event) {
  event.preventDefault();
  console.log('submit event', event.target.id.value);
  console.log('the form was submitted');
  var myFormData = {};
  myFormData.id = event.target.id.value;
  myFormData.min = event.target.min.value;
  myFormData.max = event.target.max.value;
  myFormData.avg = event.target.avg.value;

  console.log('my form data', myFormData);
  var newStore = new Store (myFormData.id, myFormData.min, myFormData.max, myFormData.avg);
  newStore.tableContent();
}

formEl.addEventListener('submit', onSubmit);
