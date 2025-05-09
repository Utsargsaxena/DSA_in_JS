//Approaches : 
// Brute force , 
// Using Map (optimized), 
// Using Set(boolean true,false , exists case). 


const twoSum = (nums, target) => {
  const map = new Map(); // value → index

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i]; // return stored index + current index
    }

    map.set(nums[i], i); // store value → index for future lookup
  }
};

const nums = [2, 4, 3];
const target = 5;
const res = twoSum(nums, target);
console.log(res); // [0, 2]
