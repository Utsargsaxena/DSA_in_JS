const majorityElement = (arr) => {
  let count = 0;
  let candidate = null;

  for (let num of arr) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  return candidate;
};

const arr = [1,2,3,2,3,3]
console.log(majorityElement(arr));