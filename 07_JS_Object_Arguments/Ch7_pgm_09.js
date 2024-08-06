// Finding a character with indexOf

var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");

console.log(message.substr(charIndex, 3));
var charIndex = message.indexOf("g");

console.log(message.substr(charIndex, 2));
var charIndex = message.indexOf("c");

console.log(message.substr(charIndex, 6));

var charIndex = message.lastIndexOf("m");

console.log(message.substr(charIndex, 4));


let indexOfOO = message.lastIndexOf("oo");


console.log( indexOfOO);

/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */