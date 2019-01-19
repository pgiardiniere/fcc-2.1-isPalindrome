"use strict";
function palindrome(str) {
  let isPalindrome = true;
  
  //format str
  let strFormat = str.toLowerCase().split(',');   //.replace(/,\s\./g, ""); //attempted regex implementation
  console.log(strFormat);
  console.log(typeof(strFormat));
  strFormat.join('');
  console.log(strFormat);
  console.log(typeof(strFormat));
  //put str into an array
  
  let strArray = [];
  for (let i=0; i < strFormat.length; i++) {
    strArray.push(strFormat.charAt(i));
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