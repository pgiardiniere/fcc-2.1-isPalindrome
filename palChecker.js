"use strict";
function palindrome(str) {

  //format string
  let re2 = /[^a-zA-Z0-9]/g;
  str = str.toLowerCase().replace(re2,'');
  console.log(str);

  //push string into array for check
  let strArray = [];
  for (let i=0; i < str.length; i++) {
    strArray.push(str.charAt(i));
  }
  
  //check individual chars within the array for equality
  for (let i=0; i<strArray.length; i++) {
    if (strArray[i] !== strArray.reverse()[i]) {
      return false;
    }
  }

  return true;
}

palindrome("five|\_/|four");