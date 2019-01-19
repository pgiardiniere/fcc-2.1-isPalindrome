"use strict";
function palindrome(str) {

  //format string
  let re2 = /[^a-zA-Z0-9]/g;
  str = str.toLowerCase().replace(re2,'');

  //split into array ('' > each el gets own index), reverse array, join array into string, compare indexes for each i
  for (let i=0; i<str.length; i++) {
    if (str[i] !== str.split('').reverse().join('')[i]) return false;  
  }
  return true;
}

palindrome("five|\_/|four");