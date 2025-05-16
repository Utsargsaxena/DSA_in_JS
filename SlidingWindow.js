function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove out-of-window indices
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }

    // Remove smaller elements from end
    while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(i);

    // Push current window max
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}

// 🔍 Input
const nums2 = [1,3,-1,-3,5,3,6,7];
const k = 3;
console.log("Sliding Window Maximum:", maxSlidingWindow(nums2, k)); 
// Output: [3, 3, 5, 5, 6, 7]
