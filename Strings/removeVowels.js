// let Str = "take u forward";
// let result = '';
// let n = Str.length;
// const vowels = ['a','e','i','o','u'];

// for(let i=0; i<n; i++){
//     if(!vowels.includes(Str[i].toLowerCase())){
//         result+=Str[i];
//     }
// }

// console.log(result);

let A = 'A'.charCodeAt(0);
let Z = 'Z'.charCodeAt(0);
let a = 'a'.charCodeAt(0);
let z = 'z'.charCodeAt(0);

const str = "take12% *&u ^$#forward";

console.log(str.split("").filter(i=>{
    const c = i.charCodeAt(0);
    if(c>=A&&c<=Z || c>=a&&c<=z){
        return true
    }
    return false
}).join(''));