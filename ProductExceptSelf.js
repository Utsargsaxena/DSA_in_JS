function productExceptSelf(nums) {
  const n = nums.length;
  const result = Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}

// 🔍 Input
const nums1 = [1, 2, 3, 4];
console.log("Product Except Self:", productExceptSelf(nums1)); 
// Output: [24, 12, 8, 6]
