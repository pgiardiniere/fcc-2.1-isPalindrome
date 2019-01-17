"use strict";
function palindrome(str) {
  let isPalindrome = false;
  
  //format str
  str = str.toLowerCase().replace(/\s/g, '');
  //put str into an array
  let strArray = [];
  for (let i=0; i < str.length; i++) {
    strArray.push(str.charAt(i));
  }
  //test if array.reverse() === array
  isPalindrome = strArray.reverse() === strArray;
  console.log(isPalindrome);
  return isPalindrome;
}
  
  
  
palindrome("eye");