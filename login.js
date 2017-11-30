'use strict';

(function () {
var password= document.getElementByld('password'); // Store password inputs
var passwordConfirm = document.getElementByid('conf-password ' );
function setErrorHighlighter(e) {
// Get target element
//If its length is< 8
//Set class to fail
// Otherwise
// Set class to pass
// Get target element
// If class is fail
// Clear class
function passwordsMatch(e) {
var target= e.target || e.srcElement;
// If value matches pwd and it is longer than 8 characters
if ((password.value=== target.value) && target.value.length>= 8){
var target= e.target || e.srcElement; if (target.value.length< 8) {
target.className ='fail';
} else {
target.className = 'pass';
}

addEvent(password, 'focus', removeErrorHighlighter);
addEvent(password, 'blur', setErrorHighlighter);
addEvent (passwordConfirm, 'focus' , removeErrorHigh1ighter); addEvent(passwordConfirm, ' b l u r ' , passwordsMatch);
}());

location.href
var userBank = ['Sarah_B', 'Jordan_L', 'Wyatt_P', 'Jules_D', 'Yohanes_D'];
var passwordBank = ['Password'];
