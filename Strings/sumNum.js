// Sum of the Numbers in a String
// Problem: Given a string, calculate the sum of numbers in a string (multiple consecutive digits are considered one number)

// const str = '1xyz23';
// let sum = [];

// for(let i of str){
//     if(isNaN(i)){
//         if(sum[sum.length-1]!=='+'){
//             sum.push('+')
//         }
//     }else{
//         sum.push(i)
//     }
// }

// console.log(eval(sum.join('')))

// // Capitalize first and last character of each word of a string
// const str2 = "take u forward is awesome";
// const words = str2.split(" ").map(i=>{
//     if(i.length<=1) 
//         return i[0].toUpperCase();
//     else 
//         return i[0].toUpperCase()+i.slice(1,i.length-1)+i[i.length-1].toUpperCase()
// });

// console.log(words)

// Calculate Frequency of characters in a String

// const s = "takeuforward";

// const freq = {};

// for(let i of s){
//     freq[i] = freq[i] ? freq[i]+1 : 1; 
// }

// console.log(freq)

// Find Non-repeating characters of a String

// const word = "google";
// const frequency = {}

// for(let i of word){
//     frequency[i] = frequency[i] ? frequency[i]+1 : 1; 
// }

// let result = "";

// for(let i of Object.entries(frequency)){
//     if(i[1]==1){
//         result+=i[0]
//     }
// }

// console.log(result);

// Check if two Strings are anagrams of each other

// const first = "CAT";
// const second = "ACT";

// if(first.length != second.length) console.log("Not a anagram");

// for(let i of first){
//     if(!second.includes(i)){
//         console.log("Not a anagram")
//         break;
//     }
// }

// const alphabet = new Array( 200 ).fill( 0 );

// const str = "takeuforward";

// for(let i of str){
//     alphabet[i.charCodeAt(0)] += 1;
// }

// const max = Math.max(...alphabet);
// const maxIndex = alphabet.indexOf(max);

// console.log(String.fromCharCode(maxIndex));

// Remove All Duplicates from a String

// const char = "cbacdcbc";
// const obj = {};
// let result = "";

// for(let i of char){
//     obj[i] = obj[i] ? obj[i]+1 : 1;
//     if(obj[i]<=1){
//         result += i;
//     }
// }

// console.log(result);

// Remove Characters from first String present in the Second String

// let str1 = "abcdef";
// const str2 = "cefz";
// let result = "";

// for(let i in [...str1]){
//     if(!str2.includes(str1[i])){
//         result+=str1[i]
//     }
// }

// str1 = result;

// console.log(str1);

// Find the largest word in a String

// const s = "Google Doc";

// const arr = s.split(" ");
// let max = "";

// for(let i of arr){
//     max = i.length > max ? i : max;
// }

// console.log(max)


// Find word with highest number of repeated letters in string

// const string = "abcdefghij google microsoft";

// const words = string.split(" ");

// function maxFreq(word) {
//     const freq = new Array(26).fill(0); // Array to track letter frequencies (assuming only lowercase a-z)
//     let repeatedCount = 0;

//     for (const char of word) {
//         const index = char.charCodeAt(0) - 97; // Convert char to index (a=0, b=1, ..., z=25)
//         if (index >= 0 && index < 26) { // Ignore non-alphabet characters
//             freq[index]++;
//             if (freq[index] === 2) {
//                 repeatedCount++; // Count only when a letter is repeated for the first time
//             }
//         }
//     }

//     return repeatedCount;
// }

// const repeatedCounts = words.map(maxFreq);

// // Find the index of the word with the maximum repeated letters
// let maxIndex = 0;
// for (let i = 1; i < repeatedCounts.length; i++) {
//     if (repeatedCounts[i] > repeatedCounts[maxIndex]) {
//         maxIndex = i;
//     }
// }

// console.log(words[maxIndex]);

// Find the Position of a Substring within a String

const str1 = "takeuforward"
const str2 = "forward"

const startIndex = str1.split(str2)[0].length;
const endIndex = str2.length+startIndex;

console.log(str1.substring(startIndex, endIndex));