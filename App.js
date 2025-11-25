


// const fruits = [
//   "Apple",
//   "Banana",
//   "Orange",
//   "Mango",
//   "Pineapple",
//   "Strawberry",
//   "Blueberry",
//   "Raspberry",
//   "Watermelon",
//   "Papaya",
//   "Kiwi",
//   "Grapes",
//   "Cherry",
//   "Peach",
//   "Pear",
//   "Plum",
//   "Guava",
//   "Lemon",
//   "Lychee",
//   "Coconut",
//   "Pomegranate",
// ];

// const allFruitsList = document.querySelector(".allFruits");
// const deleteItemList = document.querySelector(".deletedItems");
// const deletedItem = []

// function renderItem() {
//   allFruitsList.innerHTML = "";
//   for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//     allFruitsList.innerHTML += `<li>${fruits[i]} <button onclick="deleteitem(${i})">delete</button></li>`;
//   }
// }

// renderItem();

// function deleteitem(index) {
//   deletedItem.push(fruits[index]);
//   fruits.splice(index, 1);
//   renderItem();

//   deleteItemList.innerHTML = ""
//   for(let i = 0; i < deletedItem.length; i++){
//     deleteItemList.innerHTML += `<li>${deletedItem[i]}</li>`
//   }

// }



// string methods

// tolowercase
// touppercase
// slice
// char at
// split
// join
// replace
// replace all


// let username = "Abdullah";
// console.log(username.toLowerCase());
// console.log(username.toUpperCase());



// let city = prompt("enter city name").toLowerCase();

// if(city === "quetta"){
//   console.log("you live in the best city");
  
// }else {
//   console.log("nothing");
  
// }



// let username = "Abdullah";
// console.log(username[2]);
// console.log(username.slice(2 , 5));


// console.log(username.charAt(2));

// let sentence = "Babar azam is the best player in the world. Recently Babar azam scored a century after 88 innings. Babar azam is the most run scorer player in Pakistan"

// console.log(sentence.split(" ").reverse().join(" "));


// console.log(sentence.replace("Babar azam" , "Azam khan"));
// console.log(sentence.replaceAll("Babar azam" , "Azam khan"));





















// 1. Lowercase Name
// Write a function that takes a name as input and returns it all in lowercase.

const input = document.querySelector("input");
function textChange() {
  console.log(input.value.toLowerCase());
    input.value = "";

}












// 2. Uppercase Shouting
// Convert a given string into uppercase to simulate shouting. Example: "hello" →
// "HELLO".


let greeting = "hello";
console.log(greeting.toUpperCase());























// 3. Count Characters
// Given a string, return the number of characters in it.

let phrase = "Hello, how are you?";
console.log(phrase.length);
























// 4. First Character
// Write a function that returns the first character of a string using charAt().

const inputOne = document.querySelector("#input");
function changeLower() {
  console.log(inputOne.value.toUpperCase());
    input.value = "";

}

























// 5. Last Character
// Return the last character of any string using .charAt() and .length.


let text = "JavaScript";
let lastChar = text.charAt(text.length - 1);
// let lastChar = text.charAt(9);

console.log(lastChar);























// 6. Find Position of Word
// Given a sentence, find the position (index) of the word "apple" using indexOf.

let sentenceOne = "I like to eat apple and banana.";
let position = sentenceOne.indexOf("apple");
console.log(position);




















// 7. Extract First Word
// Use slice() and indexOf() to extract the first word from a sentence.
let sentenceTwo = "Learning JavaScript is fun.";
let firstSpaceIndex = sentenceTwo.indexOf(" ");
let firstWord = sentenceTwo.slice(0, firstSpaceIndex);
console.log(firstWord);














// 8. Replace a Word
// Replace the word "bad" with "good" in a given sentence using replace().
let sentenceThree = "This is a bad idea.";  
let newSentence = sentenceThree.replace("bad", "good");
console.log(newSentence);























// 9. Replace All Vowels
// Replace all occurrences of vowels in a string with "*" using replaceAll().

let sentenceFour = "This is an example sentence.";
let modifiedSentence = sentenceFour.replaceAll("a", "*")
                                   .replaceAll("e", "*")    
                                      .replaceAll("i", "*")
                                        .replaceAll("o", "*")
                                            .replaceAll("u", "*");
console.log(modifiedSentence);
















// 10. Split Sentence into Words
// Convert a sentence into an array of words using split(" ").
let sentenceFive = "Split this sentence into words.";
let wordsArray = sentenceFive.split(" ");
console.log(wordsArray);




















// 11. Capitalize First Letter
// Capitalize only the first letter of a given word.


let word = "javascript";
let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
console.log(capitalizedWord);   



















// 12. Find Second Word
// Write a function that returns the second word of a sentence using split().
let sentenceSix = "Find the second word here.";
let words = sentenceSix.split(" ");
let secondWord = words[1];
console.log(secondWord);    






















// 13. Censor a Word
// Replace all instances of a bad word like "dumb" in a string with "****".
let sentenceSeven = "That was a dumb idea. Don't be dumb.";
let censoredSentence = sentenceSeven.replaceAll("dumb", "****");
console.log(censoredSentence);  


















// 14. Count Words in Sentence
// Use .split() and .length to count how many words are in a sentence.
let sentenceEight = "Count the number of words in this sentence.";
let wordCount = sentenceEight.split(" ").length;
console.log(wordCount);




















// 15. Check if Word Exists
// Return true if a specific word (e.g., "cat") exists in a string using indexOf.
let sentenceNine = "The cat is on the roof.";
let wordToFind = "cat";
let exists = sentenceNine.indexOf(wordToFind) !== -1;
console.log(exists);














// 16. Extract Domain from Email
// Given an email address, extract and return the domain name (everything after @).
let email = "everythingafter@example.com";
let atIndex = email.indexOf("@");
let domain = email.slice(atIndex + 1);
console.log(domain);

















// 17. Reverse Words in Sentence
// Given a sentence, split it into words, reverse the array, and join it back into a string.
let sentenceTen = "Reverse the order of these words.";  
let reversedSentence = sentenceTen.split(" ").reverse().join(" ");
console.log(reversedSentence);



















// 18. Check Palindrome (Basic)
// Write a function that checks if a word is the same when reversed (ignore case).

function isPalindrome(word) {
  let lowerCaseWord = word.toLowerCase();
  let reversedWord = lowerCaseWord.split("").reverse().join("");
  return lowerCaseWord === reversedWord;
}   
console.log(isPalindrome("Racecar")); 
console.log(isPalindrome("hello"));   
























// 19. Count Vowels
// Count how many vowels are in a given string using a loop and charAt.
let inputString = "Count the vowels in this sentence.";
let vowelCount = 0;
let vowels = "aeiouAEIOU";
for (let i = 0; i < inputString.length; i++) {
  if (vowels.indexOf(inputString.charAt(i)) !== -1) {
    vowelCount++;
  }
}
console.log(vowelCount);



















// 20. Alternate Case Converter
// Convert a string to alternating case (e.g., "hello" → "HeLlO").

let inputStr = "alternate case converter";
let resultStr = "";
for (let i = 0; i < inputStr.length; i++) {
  if (i % 2 === 0) {
    resultStr += inputStr.charAt(i).toUpperCase();
    } else {
    resultStr += inputStr.charAt(i).toLowerCase();
  } 
}
console.log(resultStr);





















// a.
// 21. Title Casing a Sentence
// Convert a full sentence so that the first letter of each word is capitalized.
let sentenceEleven = "convert this sentence to title case.";    
let wordsInSentence = sentenceEleven.split(" ");
for (let i = 0; i < wordsInSentence.length; i++) {
  wordsInSentence[i] = wordsInSentence[i].charAt(0).toUpperCase() + wordsInSentence[i].slice(1);
}
let titleCasedSentence = wordsInSentence.join(" ");
console.log(titleCasedSentence);












// 22. Remove Duplicate Words
// Given a sentence, remove any repeated words (case-insensitive).
let sentenceTwelve = "This is is a test Test sentence.";
let wordsArrayTwelve = sentenceTwelve.toLowerCase().split(" ");
let uniqueWords = [];   
for (let i = 0; i < wordsArrayTwelve.length; i++) {
  if (!uniqueWords.includes(wordsArrayTwelve[i])) {
    uniqueWords.push(wordsArrayTwelve[i]);
  }
}
let resultSentence = uniqueWords.join(" ");
console.log(resultSentence);


















// 23. Mask Email Address
// Convert an email like john.doe@example.com to j***@example.com.
let emailAddress = "saifurrehman786@gmail.com";
let atSignIndex = emailAddress.indexOf("@");
let maskedEmail = emailAddress.charAt(0) + "***" + emailAddress.slice(atSignIndex);
console.log(maskedEmail);















// 24. Find Most Frequent Word
// Return the word that appears most frequently in a paragraph.
let paragraph = "This is a test. This test is only a test.";
let wordsInParagraph = paragraph.toLowerCase().replace(/[.,]/g, "").split(" ");
let wordFrequency = {};
for (let i = 0; i < wordsInParagraph.length; i++) {
    let word = wordsInParagraph[i];
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
}

let mostFrequentWord = "";
let maxCount = 0;
for (let word in wordFrequency) {
    if (wordFrequency[word] > maxCount) {
        maxCount = wordFrequency[word];
        mostFrequentWord = word;
    }   
}
console.log(mostFrequentWord);




















// 25. Abbreviate a Full Name
// Given John Ronald Reuel Tolkien, return J.R.R.T. using split, charAt, and
// toUpperCase.
let fullName = "John Ronald Reuel Tolkien";
let nameParts = fullName.split(" ");
let initials = "";  
for (let i = 0; i < nameParts.length; i++) {
    initials += nameParts[i].charAt(0).toUpperCase() + ".";
}
console.log(initials);
















// 26. Check if Anagram
// Write a function that checks whether two strings are anagrams (same letters, different

// order).
function areAnagrams(str1, str2) {
  let normalize = (str) => str.toLowerCase().split("").sort().join("");
  return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent"));  
console.log(areAnagrams("hello", "world"));



















// 27. Find All Word Positions
// Return all indices where a specific word occurs in a string (case-insensitive).
let textBlock = "The cat sat on the mat. The cat is happy.";
let searchWord = "cat";
let lowerTextBlock = textBlock.toLowerCase();
let lowerSearchWord = searchWord.toLowerCase();
let positions = [];
let index = lowerTextBlock.indexOf(lowerSearchWord);
while (index !== -1) {
    positions.push(index);
    index = lowerTextBlock.indexOf(lowerSearchWord, index + 1);
}
console.log(positions);



















// 28. Reverse Each Word
// Given a sentence, reverse each word individually but keep them in the same order.
let sentenceThirteen = "Reverse each word in this sentence.";
let wordsInSentenceThirteen = sentenceThirteen.split(" ");
for (let i = 0; i < wordsInSentenceThirteen.length; i++) {  
    wordsInSentenceThirteen[i] = wordsInSentenceThirteen[i].split("").reverse().join("");
}

let reversedWordsSentence = wordsInSentenceThirteen.join(" ");
console.log(reversedWordsSentence);















// 29. Smart Word Wrap
// Break a sentence into lines of a given character limit, wrapping on spaces (not in the
// middle of a word).
function wordWrap(sentence, limit) {
  let words = sentence.split(" ");
  let wrappedLines = [];
  let currentLine = "";
    for (let i = 0; i < words.length; i++) {
        if ((currentLine + words[i]).length <= limit) {
            currentLine += (currentLine ? " " : "") + words[i];
        } else {
            wrappedLines.push(currentLine);
            currentLine = words[i];
        }
    }
    if (currentLine) {
        wrappedLines.push(currentLine);
    }   
    return wrappedLines.join("\n");
}
let longSentence = "This is an example of a long sentence that needs to be wrapped properly without breaking any words.";
console.log(wordWrap(longSentence, 20));























// 30. Find Longest Word
// Find and return the longest word in a sentence.
let sentenceFourteen = "Find the longest word in this particular sentence.";
let wordsInSentenceFourteen = sentenceFourteen.split(" ");
let longestWord = "";
for (let i = 0; i < wordsInSentenceFourteen.length; i++) {
    if (wordsInSentenceFourteen[i].length > longestWord.length) {
        longestWord = wordsInSentenceFourteen[i];
    }
}
console.log(longestWord);
















// 31. Censor Multiple Bad Words
// Given a list of bad words, replace each with "***" in a paragraph using replaceAll
// and a loop.
let paragraphTwo = "This is a dumb and silly idea. Such a dumb move!";
let badWords = ["dumb", "silly"];
for (let i = 0; i < badWords.length; i++) {
    paragraphTwo = paragraphTwo.replaceAll(badWords[i], "***");
}
console.log(paragraphTwo);




















// 32. Detect Repeated Characters
// Return all characters that appear more than once in a string.
let inputStringTwo = "programming";
let charCount = {};
let repeatedChars = [];
for (let i = 0; i < inputStringTwo.length; i++) {
    let char = inputStringTwo.charAt(i);
    charCount[char] = (charCount[char] || 0) + 1;
}   
for (let char in charCount) {
    if (charCount[char] > 1) {
        repeatedChars.push(char);
    }   
}   
console.log(repeatedChars);










// 33. Compress Repeating Characters
// Convert "aaabbbcc" to "a3b3c2".
let inputStringThree = "aaabbbcc";
let compressedString = "";
let count = 1;
for (let i = 1; i <= inputStringThree.length; i++) {
    if (inputStringThree.charAt(i) === inputStringThree.charAt(i - 1)) {
        count++;    
    } else {
        compressedString += inputStringThree.charAt(i - 1) + count;
        count = 1;
    }

}
console.log(compressedString);

















// 34. Check Password Strength
// Create a function that checks if a password string meets criteria (min 8 chars, contains
// number, uppercase, lowercase).
function isStrongPassword(password) {
  let hasMinLength = password.length >= 8;
  let hasUppercase = /[A-Z]/.test(password);
  let hasLowercase = /[a-z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  return hasMinLength && hasUppercase && hasLowercase && hasNumber;
}   
console.log(isStrongPassword("Password1"));  
console.log(isStrongPassword("weakpass"));
console.log(isStrongPassword("Short1"));
console.log(isStrongPassword("Nouppercase1"));
console.log(isStrongPassword("NOLOWERCASE1"));
console.log(isStrongPassword("NoNumber"));


















// 35. Extract Hashtags
// From a social media post, extract all words starting with #.
let post = "Loving the #sunshine and #beach vibes! #summer2024";
let wordsInPost = post.split(" ");
let hashtags = [];
for (let i = 0; i < wordsInPost.length; i++) {
    if (wordsInPost[i].charAt(0) === "#") {
        hashtags.push(wordsInPost[i]);
    }
}
console.log(hashtags);

















// 36. CamelCase Converter
// Convert a sentence like "make this camel case" to "makeThisCamelCase".
// 37. Parse CSV Line
// Given a CSV string like "name,age,email", return an array of values.
// 38. Custom Split Without Using split()
// Write a function that splits a string by a space character without using .split().


// 39. Format Phone Number
// Given a 10-digit string like "1234567890", return it in the format (123) 456-7890.
// 40. Detect Palindromes in Sentence
// Return all palindromic words in a sentence (e.g., "madam is at civic center" →
// ["madam", "civic"]).












// 1. Round a Number
// Round the number 4.7 using Math.round().
// 2. Ceil a Decimal
// Use Math.ceil() to round 5.3 up to the next whole number.
// 3. Floor a Decimal
// Use Math.floor() to round 8.9 down to the previous whole number.
// 4. Generate a Random Number (0–1)
// Create a function that returns a random number between 0 and 1 using
// Math.random().
// 5. Random Integer (0–9)
// Generate a random whole number between 0 and 9.
// 6. Random Integer (1–100)
// Generate a random integer between 1 and 100.
// 7. Convert String to Integer
// Use parseInt() to convert the string "42" into a number.
// 8. Convert String to Float
// Use parseFloat() to convert "3.14159" into a floating point number.
// 9. Round User Input
// Take a number from a form input, round it, and display the result on the page.
// 10. Dice Simulator
// Simulate a 6-sided dice roll (returns a number between 1 and 6).
// 11. Temperature Rounding
// Round a temperature value (e.g., 36.6) to the nearest integer using Math.round().

// 12. Ceil Shopping Price
// If the product price is $9.25, use Math.ceil() to charge the user $10.
// 13. Parse and Add
// Convert two string numbers like "10" and "5.5" using parseInt() and
// parseFloat() and add them.
// 14. Random Even Number (2–20)
// Generate a random even number between 2 and 20.
// 15. Check if Parsed Value is a Number
// Write a function that checks if parseInt(input) is a valid number (not NaN).
// 16. Round All Prices in Array
// Given an array of prices with decimals, return a new array with all prices rounded.
// 17. Simulate Coin Toss
// Use Math.random() to simulate a coin toss that returns "Heads" or "Tails".
// 18. Random Integer within Range (Min–Max)
// Create a function that returns a random integer between any two numbers (inclusive).
// 19. Extract Number from Text
// Use parseFloat() to extract the number from "Total: 45.90 USD".
// 20. Round to Nearest 0.5
// Given a decimal number, round it to the nearest 0.5 (e.g., 4.3 → 4.5, 4.1 → 4.0).