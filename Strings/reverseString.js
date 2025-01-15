let str = 'HELLO';
// let arr = str.split('');
// let i=0, j=str.length-1;

// while(i<j){
//     swap(i,j);
//     i++;
//     j--;
// }

// function swap(i,j){
//     const temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// str = arr.join('');

let result = [];

for(let i of str){
    result.unshift(i);
}

str = result.join('');
console.log(str);