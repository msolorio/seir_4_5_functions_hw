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

function checkPalindrome(string) {
  const lowercase = string.toLowerCase();

  return lowercase === lowercase.split('').reverse().join('');
}
