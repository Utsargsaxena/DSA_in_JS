function missingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((acc, val) => acc + val, 0);
  return expectedSum - actualSum;
}

const input2 = [3, 0, 1];
console.log("Missing Number:", missingNumber(input2)); 
// Output: 2
