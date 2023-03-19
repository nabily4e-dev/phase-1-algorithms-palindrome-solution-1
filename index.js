function isPalindrome(word) {
  // Write your algorithm here
  while (leftIndex < rightIndex) {
if (word[leftIndex] !== word[rightIndex]) {
return false;
}

leftIndex++;
rightIndex--;
}

return true;
}

/* 
  Add your pseudocode here:
    1. Initialize two variables, leftIndex and rightIndex to 0 and the last index of the word respectively.
    2. Loop through the word while leftIndex is less than rightIndex.
    3.    If word[leftIndex] is not equal to word[rightIndex], return false.
    4.    Increment leftIndex and decrement rightIndex.
    5. If the loop completes without returning false, return true.
*/

/*
  Add written explanation of your solution here:
  The isPalindrome function takes a word as an argument and returns a boolean indicating whether the word is a palindrome or not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
