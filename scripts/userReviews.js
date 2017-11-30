'use strict';
getUserData();
getRestroomData();

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
////////////////////////DYNAMIC Restrooms
new Restroom(restroomData[0][0],restroomData[0][1], restroomData[0][2], restroomData[0][3], restroomData[0][4], restroomData[0][5], restroomData[0][6], restroomData[0][7], restroomData[0][8], restroomData[0][9], restroomData[0][10] );

// ////////////////////////////Hard coded users
// new User('tinkleBell', loremIpsum, restroomList[2].name);
// new User('WestCoastBestCoast', loremIpsum, restroomList[2].name);
// new User('RowdyRuffGurl', loremIpsum, restroomList[1].name);
// new User('Lincoln-Logger', loremIpsum, restroomList[3].name );
//Dynamic USERS:
new User (userData[0][0], userData[0][1], userData[0][2], userData[0][3]);
