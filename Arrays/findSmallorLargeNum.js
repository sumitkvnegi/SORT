// Find Second Smallest and Second Largest Element in an array

// const nums = [1,2,4,7,7,5];

// let small = Math.min(...nums)
// let large = Math.max(...nums)

// let second_small = Infinity;
// let second_large = -Infinity;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < second_small && nums[i] !== small)
//       second_small = nums[i];
//     if (nums[i] > second_large && nums[i] !== large)
//       second_large = nums[i];
//   }



//   console.log("Second smallest is " + second_small);
//   console.log("Second largest is " + second_large);

// Rotate array by K elements : Block Swap Algorithm

let N = 5;
let arr = [1,2,3,4,5]
let K=2;

let left = arr.slice(0,K);
let right = arr.slice(K);

console.log([...right,...left])