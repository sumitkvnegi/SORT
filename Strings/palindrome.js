// Check if the given String is Palindrome or not

const Str =  "A0BCDCBA9";

function isPalindrome(Str){
    let n = Str.length;
    for(let i=0; i<n/2; i++){
        if(!isNaN(Str[i])){
            i=i+1;
        }else if(!isNaN(Str[Str.length-1-i])){
            n = Str.length-1;
        }else if(Str[i]!==Str[Str.length-1-i]){
            return "Not Palindrome";
        }
    }
    return "Palindrome";
}

console.log(isPalindrome(Str));