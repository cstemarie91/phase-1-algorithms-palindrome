function isPalindrome(word) {
 
    // Get the length of the array
    const len = word.length;
  
    // Iterate over the first half of the array
    for (let i = 0; i < Math.floor(len / 2); i++) {
      // Check if the element from the start does not match the element from the end
      if (word[i] !== word[len - 1 - i]) {
        return false; // If any pair does not match, it's not a palindrome
      }
    }
  
    return true; // If all pairs match, it is a palindrome
  }
  // Write your algorithm here


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
