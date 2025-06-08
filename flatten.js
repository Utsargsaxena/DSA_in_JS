// Using in-built flat
// const arr = [1,2,3,[4,5],[6,7,8],9]
// const flat = arr.flat(Infinity);
// console.log(flat)

// Recursive
const flattenArray = (arr) => {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }

  return result;
};

const arr = [1,2,3,[4,5],[6,7,8],9]
console.log(flattenArray(arr))