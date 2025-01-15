// Count number of vowels, consonants, spaces in String
const str = "Take u forward is Awesome";

const vowels = ['a','e','i','o','u'];
const result = {
    vowels: 0,
    consonants: 0,
    "white space": 0
};

for(let i=0; i<str.length; i++){
    if(vowels.includes(str[i].toLowerCase())){
        result.vowels += 1; 
    }else if(str[i] === ' '){
        result["white space"] += 1;
    }else{
        console.log(str[i])
        result.consonants += 1;
    }
}

console.log(result);

console.log(`Find the ASCII value of a character: A`, 'A'.charCodeAt(0));

// If you try to access an index that is out of bounds (e.g., str[100] for a short string), str[index] will return undefined.
// .charAt(index) will always return a string, and if the index is out of bounds, it returns an empty string ("") rather than undefined.