// 1. Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = (celsius * (9/5)) + 32;
  return fahrenheit;
}

const algoOne = convertToF(30);
console.log("algorithm 1 = " +  algoOne);



// 2. Reverse a string 
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
const algoTwo = reverseString("hello");
console.log("algorithm 2 = " + algoTwo);



// 3. Factorialize a number  
function factorialize(num) {
    if(num === 0) { 
        return 1;
    } return num * factorialize(num - 1);
  }
  
const algoThree = factorialize(5);
console.log("algorithm 3 = " + algoThree);



// 4. Find the longest word in a string
function findLongestWordLength(str) {
   var words = str.split(' ');
   var maxLength = 0;

   for(var i = 0; i < words.length; i++) { 
       if(words[i].length > maxLength) { 
           maxLength = words[i].length;
       }
   }
    return maxLength;
  }

const algofour = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log("algorithm 4 = " + algofour);