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
