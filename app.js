// 1. Verbal questions
// Write answers to the following questions as comments.

// 1. What is the difference between a parameter and an argument?
// A parameter is fed to a function in the function definition. An argument is fed to a function when calling it.

// 2. Within a function, what is the difference between return and console.log?
// A return will output a value that can be stored in a variable. A console.log will not return anything but will output to the console.

// 3. What are the implications of the ability of a function to return a value?
// If a function returns a value that value can be stored in a variable and used later in our program.

// 2. Palindrome again.
// Write a function checkPalindrome that accepts a single argument, a string. Yes, you've done it before, but do it again. Later in this assignment we're gonna beef up our palindrome function some. See if you can do it without looking back at your previous answer. The function should return true if the string is a palindrome, false if not. Make sure your function will give the correct answer for words with capital letters.

// function checkPalindrome(string) {
//   const lowercase = string.toLowerCase();

//   return lowercase === lowercase.split('').reverse().join('');
// }

// 3. Write a function sumDigits that accepts a number and returns the sum of its digits.
// function sumDigits(num) {
//   const numAsString = num.toString();
//   let sum = 0;

//   for (let i = 0; i < numAsString.length; i++) {
//     sum += parseInt(numAsString[i]);
//   }

//   return sum;
// }

// console.log(sumDigits(121));

// 4. Pythagoras
// Write a function calculateSide that takes two arguments: sideA and sideB, and returns the solution for sideC using the Pythagorean theorem.

// hint: discover the Pythagorean Theorem on a website called google.com

// hint: checkout the Math methods in javascript

// restriction: for this problem, do NOT use Math.hypot() (but for the rest of time, once you've done this problem feel free)
// function calculateSide(sideA, sideB) {
//   return Math.sqrt(sideA ** 2 + sideB ** 2);
// }

// console.log(calculateSide(2, 2));

// 5. Sum Array
// Write a function sumArray that takes an array as an argument. The array should contain numbers. The function should return the sum of the numbers in the array. Do not use .reduce().
// function sumArray(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   return sum;
// }

// console.log(sumArray([1, 2, 3, 4]));

// 6. Prime Numbers
// A Prime number is a number that is not evenly divisible by another number except 1 and itself. If you want to read more deeply about it, go here. To test whether a number is Prime, you only need to test as far as the square root of that number. This is advisable for optimization and testing large numbers.

// Step One
// Write a function called checkPrime that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not. Hint: Check every number up to the square root. To do this, try a for loop.
function checkPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// console.log(checkPrime(17));

// Step Two
// Write another function called printPrimes that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with printPrimes(97), it will print all the Prime numbers up to and including 97. This function can call on the previous checkPrime function.

// function printPrimes(limit) {
//   for (let i = 2; i <= limit; i++) {
//     if (checkPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// printPrimes(97);

// Hungry for More
// 2. Write a function insertDash that accepts a number as a parameter and returns a string with a dash inserted between any consecutive odd numbers. There should not be a dash at the end, it goes only between numbers.

// PSEUDOCODE
// - CONVERT THE NUMBER TO A STRING
// - CONVERT STRING TO ARRAY
// - LOOOP THROUGH ALL STRING NUMS IN ARRAY
// -- FOR EACH NUMBER
// --- IF NUMBER IS ODD AND NEXT NUMBER IS ODD
// ----- INSERT A DASH INTO THE STRING

// function isOdd(number) {
//   return number % 2 === 1;
// }

// function insertDash(number) {
//   const numsArr = number.toString().split('');

//   for (let i = 0; i < numsArr.length; i++) {
//     if (
//       isOdd(numsArr[i])
//       && isOdd(numsArr[i + 1])
//     ) { numsArr[i] += '-' }
//   }

//   return numsArr.join('');
// }

// console.log(insertDash(1233459));

// 3. Write a function reverseString that takes a string as a parameter and returns that string with the letters reversed without using .split(), .reverse(), or .join().

// function reverseString(string) {
//   let newString = '';

//   for (let i = string.length - 1; i >= 0; i--) {
//     newString += string[i];
//   }

//   return newString;
// }

// console.log(reverseString('racecarrrr'));
// console.log(reverseString('gecko'));

// 4. Make your palindrome function from problem two above work regardless of spacing (or capitalization). So, for example, "Sit on a potato pan Otis" or "Bird rib" would pass the test.
// function checkPalindrome(string) {
//   const lowercase = string.toLowerCase();
//   const compressed = lowercase.replace(/\s/g, '');

//   return compressed === compressed.split('').reverse().join('');
// }

// console.log(checkPalindrome('Sit on a potato pan Otis'));
// console.log(checkPalindrome('racecar racecar'));

// 5. Make your palindrome function work even if the string contains punctuation. So: "Sit on a potato pan, Otis!!!" or "A man, a plan, a canal: Panama." or "Cigar? Toss it in a can! It is so tragic." would pass the test.

// function checkPalindrome(string) {
//   const lowercase = string.toLowerCase();
//   const compressed = lowercase.replace(/\W/g, '');

//   return compressed === compressed.split('').reverse().join('');
// }

// console.log(checkPalindrome('A man, a plan, a canal: Panama.'));

// 6. Make a "word palindrome" function that returns true if the words in a phrase are the same backwards and forwards. It should not care about spacing, capitalization, or punctuation. For example the following string would pass the test:

// "Son, I am able," she said. "Though you scare me, watch!" said I, "Beloved," I said, "watch me scare you!" Though, said she: "able am I, son."

// PSEUDOCODE
// - SPLIT ON SPACES TO GET ARRAY OF WORDS
// - REMOVE NON ALPHA NUMERIC CHARACTERS
// - LOWERCASE WORDS
// - CHECK IF WORD IS SAME AS REVERSE IN THE ARRAY
// function wordPalindrome(phrase) {
//   const wordsArray = phrase.split(' ').map((word) => {
//     return word.replace(/\W/g, '').toLowerCase();
//   });

//   const numOfWords = wordsArray.length;

//   for (let i = 0; i <= numOfWords / 2; i++) {
//     if (wordsArray[i] !== wordsArray[numOfWords - i - 1]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(wordPalindrome('i speak in riddles in speak I'))