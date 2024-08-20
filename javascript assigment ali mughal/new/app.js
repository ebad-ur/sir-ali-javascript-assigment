// Chapter 21 (Changing Case) 

// 1. Type the characters that are missing from this code. var allLower = userInput.toLowerCase; 
// Note: Correct this statement by yourself. 
var allLower = userInput.toLowerCase();

// 2 Convert the string represented by x to lower-case and assign the  result to the same variable. 
x = x.toLowerCase();

//3)Convert the string represented by y to upper-case and assign the  result to the same variable. 
y = y.toUpperCase();

// 4 Convert the string represented by a variable to lower-case and  assign the result to a second variable that hasn't been declared  beforehand.
const newVariable = existingVariable.toLowerCase()
// or

var newVaariable = existingVariable.toLowerCase(); 

// 5 Convert the string represented by an array element to lower-case  and assign it to a variable that hasn't been declared beforehand. 6. Display in an alert the upper-case version of the string  represented by a variable. 

let myArray = ["Hello", "World", "JavaScript"];
let newVarriable = myArray[0].toLowerCase(); 

// or
let myString = "hello world";
alert(myString.toUpperCase());

// 6  var cityName = “kaRacHi”; 
// Convert the string represented by a cityName in Capitalisation is  the writing of a word with its first letter in uppercase and the  remaining letters in lowercase

var cityName = "kaRacHi";
var capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

console.log(capitalizedCityName); 

// Chapter 22 - 25 (Strings) 
//  1 "captain" has been assigned to variable “sameWords”. You want  to slice "ap" out of it. 

var sameWords = "captain";
var slicedPart = sameWords.slice(1, 3);

// 2. The number of characters in the string will be assigned to the  variable.
var myStrings = "example";
var stringLength = myString.length; 

// 3 The string "elephant" has been assigned to the variable animal.  Slice the four middle characters out of the string and assign it to  the variable seg, which hasn't been declared beforehand. 
var animal = "elephant";
var seg = animal.slice(2, 6); 

// 4 Find the number of characters in the string represented by a  variable and assign the number to a second variable.
var originalString = "hello world"; 
var stringLength = originalString.length;

// 5  In a first statement measure how many characters there are in a  string represented by a variable. In a second statement slice all  but the first character and last 3 characters of the string and  assign it to a second variable that hasn't been declared  beforehand. 


let str = "ExampleString";


let length = str.length;


let slicedStr = str.slice(1, -3);

console.log(length);    
console.log(slicedStr);  

// 6  var text = "To be or not to be."; 
// var indx = text.indexOf("be"); 
// What is the value of indx? 

var text = "To be or not to be.";
var indx = text.indexOf("be");

//  7 var text = "To be or not to be."; 
// var indx = text.lastIndexOf("be"); 
// What is the value of indx? 
// Note: Try the above both examples by yourself. 

var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

//  8 Find the index of the first character of the last instance of "go" in  the string represented by the variable text and assign the number  to the variable indx, which hasn't been declared beforehand. 

var text = "Go to go to go";

var indx = text.lastIndexOf("go");

console.log(indx); 

// 9  Code the first line of an if statement that tests whether a segment  with an index represented by indexNum exists in a string. 10. In this string "abcde", what character is at index 2? (Use  charAt) 

var star = "abcde";
var charAtIndex2 = str.charAt(2);
console.log(charAtIndex2); 

// Find the 10th character in the string represented by text and  assign it to the variable cha, which hasn't been declared  beforehand.


var text = "Your string here"; 

var cha = text.charAt(9);

console.log(cha); 

// 11  Find the last character in the string represented by str and  assign it to x, which hasn't been declared beforehand. 13. Find the the 5th character in a string represented by input  and assign it to cha, which hasn't been declared beforehand. 14. Code the first line of an if statement that tests whether the  3rd character of a string represented by a variable is a particular  character. 


var sstr = "ExampleString"; 


var x = str.charAt(str.length - 1);

console.log(x);

// 12 Code a for loop that cycles through all the characters of a  string represented by a variable and assigns each character to an  element of an array that has been declared beforehand.
// In the string represented by reply replace the first instance of "no"  with "yes" and assign the revised string to revisedReply, which hasn't  been declared beforehand. 


var stsr = "ExampleString";
var charArray = []; 


for (var i = 0; i < str.length; i++) {
    charArray[i] = str.charAt(i);
}

console.log(charArray); 

//  13  In a string represented by str replace the first instance of "1"  with "one" and assign the revised string to newStr, which hasn't  been declared beforehand. 


var ssstr = "This is the 1st example with 1 in it.";


var newStr = str.replace("1", "one");

console.log(newStr);

// 14  If you want all instances replaced, enter 3 characters that  need to appear in this statement. 
var y = x.replace("a", "z"); 
var y = x.replace(/a/g, "z");

// Chapter 26 (Rounding Numbers) 

//  Form a statement that rounds a number to the nearest integer. 2. Round up a number represented by origNum and assign it to  roundNum, which hasn't been declared beforehand. 3. Round down a number represented by origNum and assign it to  roundNum, which hasn't been declared beforehand. 4. Round a number represented by a variable and assign the result  to a second variable that hasn't been declared beforehand. 5. Round .5 to 0 and assign it to a variable that hasn't been declared  beforehand. 

var roundedNumber = Math.round(number);
var origNum = 4.2; 
var roundNum = Math.ceil(origNum);
var origNum = 4.7;
var roundNum = Math.floor(origNum);
var num = 7.6;
var rounded = Math.round(num);
var roundedValue = Math.floor(0.5);


// Chapter 27 (Random Numbers) 

// 1 Convert a random number generated by JavaScript to a number in  the range 1 to 50 
var randomNumber = Math.floor(Math.random() * 50) + 1;

console.log(randomNumber); 

// 2 Generate a random number and assign it to a variable that hasn't  been declared beforehand. 

var randomNumber = Math.random();
var randomNumber = Math.floor(Math.random() * 50) + 1; 

// 3 You have to create a dice in JavaScript with the use of pseudo random number.


function rollDice() {

    var diceRoll = Math.floor(Math.random() * 6) + 1;
    return diceRoll;
}


var result = rollDice();
console.log("You rolled a " + result);

//  4 You have to create a toss (head/tail) in JavaScript with the use of  pseudo-random number. 

function tossCoin() {
   
    var randomNumber = Math.random();
    
  
    var result = randomNumber < 0.5 ? "Heads" : "Tails";
    
    return result;
}


var tossResult = tossCoin();
console.log("The result of the toss is: " + tossResult);

// Chapter 28, 29 (Converting Strings) 

// 1 1. How do you convert a string to an integer in JavaScript? 2. Write a JavaScript function to convert the string "123" to an  integer. 

var stra = "123";
var integer = parseInt(str, 10); 
console.log(integer); 

// 2  How can you convert a string containing a decimal number to a  floating-point number in JavaScript? 

var ssstr = "123.45";
var floatNumber = parseFloat(str);
console.log(floatNumber); 

var strs = "123.45";
var floatNumber = +str;
console.log(floatNumber); 

// 3 How can you check if a string can be successfully converted to an  integer or decimal in JavaScript before performing the  conversion? 

function isValidInteger(str) {
    var num = parseInt(str, 10);
    return !Number.isNaN(num) && num.toString() === str.trim();
}


console.log(isValidInteger("123"));
console.log(isValidInteger("123.45")); 
console.log(isValidInteger("abc")); 

//  4 How can you convert a number to a string in JavaScript? 6. Write a JavaScript function to convert the number 42 to a string. 7. Can you convert a string representing a decimal number (e.g.,  "3.14") to an integer in JavaScript? If so, how? 

var num = 42;
var astr = String(num);
console.log(str); 

// Chapter 30 (Controlling the length of  decimals) 

// 1  Code a statement that rounds a number represented by num to 4  places, converts it to a string, and assigns it to newNum, which  hasn't been declared beforehand. 

var num = 123.456789;
var newNum = num.toFixed(4);

console.log(newNum);

// 2  In a single statement round a number represented by a variable to  2 places, convert it to a string, convert it back to a number, and  assign it to the same variable.

var num = 123.456789; 
num = parseFloat(num.toFixed(2));

console.log(num);
// 3 Code the first line of an if statement that tests whether the  number represented by num, rounded to 2 digits and converted  to a string, has more than 4 characters in it. 

if (num.toFixed(2).length > 4) {

}

// 4  Assign a number with many decimal places to a variable. Code an alert that displays the number rounded to 2 decimal  places and converted to a string. 


var num = 123.456789;


var roundedStr = num.toFixed(2);


alert(roundedStr);

























