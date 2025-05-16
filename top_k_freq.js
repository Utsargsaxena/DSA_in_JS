function topKFrequent(nums, k) {
  const freqMap = new Map();

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const heap = [];

  for (let [num, freq] of freqMap.entries()) {
    heap.push({ num, freq });

    // Keep the heap sorted by frequency (min heap)
    heap.sort((a, b) => a.freq - b.freq);

    // If heap grows beyond k, remove the smallest frequency element
    if (heap.length > k) {
      heap.shift();
    }

  }

  // Step 3: Extract the top k frequent numbers
  const result = heap.map(entry => entry.num);
  return result;
}

// 🔹 Test Input
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

const output = topKFrequent(nums, k);
console.log("Output:", output);

// Brute Force 

// const topK = () => {
//   const map = new Map();
  
//   for(let num of arr)
//   map.set(num, (map.get(num) || 0) + 1);  
//   return [...map.entries()]
//   .sort((a,b)=> b[1]-a[1])
//   .slice(0,k)
//   .map(([num])=>num)
// }

// const arr = [0, 0, 1];
// const k = 2 ;
// console.log(topK(arr,k))

//Bucket Sort

// const bucketSort = (arr, k) => {
//   const map = new Map();

//   // Step 1: Count frequencies
//   for (const num of arr) {
//     map.set(num, (map.get(num) || 0) + 1);
//   }

//   // Step 2: Buckets from 0 to max possible frequency (arr.length)
//   const buckets = Array(arr.length + 1).fill().map(() => []);

//   // Step 3: Fill buckets based on frequency
//   for (const [num, freq] of map.entries()) {
//     // Ensure freq is a number and within bounds
//     if (freq <= arr.length) {
//       buckets[freq].push(num);
//     }
//   }

//   // Step 4: Collect top k elements from buckets
//   const result = [];
//   for (let x = buckets.length - 1; x >= 0 && result.length < k; x--) {
//     result.push(...buckets[x]);
//   }
//   return result.slice(0, k);
  
// };
 
// const arr =[1,2,3,2,2,2,2,1,1];
// const k = 3;
// console.log(bucketSort(arr,k))