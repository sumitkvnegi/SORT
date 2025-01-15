const arr =  [4, 2, 7, 1];

for(let i=0; i<arr.length; i++){
    let flag = false;
    for(let j=0; j<arr.length; j++){
        if(arr[j]>arr[j+1]){ // swap if left element is big
            flag = true; // turn flag true to indicate swap happen
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // swap
        }
    }
    if(!flag){ // break if no swap happen, indicating already sorted array
        break;
    }
}

console.log(arr);