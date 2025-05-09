//Approaches
// Brute force (n^2)
// Optimized 

const maxSubarray = (nums) => {
 let max = nums[0];
  let curr = nums[0];

  for (let i = 1; i < nums.length; i++) {
    curr = Math.max(nums[i], curr + nums[i]);
    max = Math.max(max, curr);
  }

  return max;
}

const nums = [2,5,4,-66,7,1]
console.log(maxSubarray(nums)); 