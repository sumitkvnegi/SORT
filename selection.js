const arr =  [4, 2, 7, 1];

for(let i=0; i<arr.length; i++){
    let min = i;
    for(let j=i+1; j<arr.length; j++){
        if(arr[j]<arr[min]){
            min = j;
        }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]; // swap
}

console.log(arr)