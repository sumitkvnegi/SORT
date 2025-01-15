// Remove brackets from an algebraic expression
const expression = "a+((b-c)+d)";
let output = "";
const brackets = ['(',')'];

for(let i of expression){
    if(!brackets.includes(i)){
        output+=i;
    }
}

console.log(output)