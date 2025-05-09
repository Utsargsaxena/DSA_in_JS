//Approaches

// DSA core logic


function chunk(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

const arr = [1,2,3,4,5,6];
const size = 3;
console.log(chunk(arr,size))



// Approach: Polyfill - Add chunk() to Array prototype

// Array.prototype.chunk = function(size) {
//   const result = [];

//   for (let i = 0; i < this.length; i += size) {
//     result.push(this.slice(i, i + size));
//   }

//   return result;
// };

// // Test
// const arr = [1, 2, 3, 4, 5, 6];
// const size = 3;
// console.log(arr.chunk(size)); // [[1,2,3], [4,5,6]]