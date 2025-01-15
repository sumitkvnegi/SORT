const arr = [4, 2, 7, 1];

function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right){
    const result = [];
    let i = 0, j = 0;

        // Merge while both arrays have elements
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }

    return [...result, ...left.slice(i), ...right.slice(j)];
}
console.log(mergeSort(arr));