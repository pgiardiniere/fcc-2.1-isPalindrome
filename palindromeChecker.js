"use strict";
function palindrome(str) {
  let isPalindrome = true;
  
  //format str
  str = str.toLowerCase();
  let punctRemoved = str.replace(/,/g, "")
  //put str into an array
console.log(str);
console.log(punctRemoved);
  let strArray = [];
  for (let i=0; i < str.length; i++) {
    strArray.push(str.charAt(i));
  }

console.log(strArray);

  for (let i=0; i<strArray.length; i++) {
    if (strArray[i] !== strArray.reverse()[i]) {
      isPalindrome=false;
      break;
    }
  }
  console.log(isPalindrome);
  return isPalindrome;
}
  
  
  
palindrome("A man, a plan, a canal. Panama");