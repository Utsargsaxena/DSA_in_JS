// POLYFILL
Array.prototype.myFilter = function(callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    // Skip holes in sparse arrays
    if (this.hasOwnProperty(i)) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
};

// INPUT
const inputArr = [10, 15, 20, 25, 30];

// OUTPUT
const outputArr = inputArr.myFilter((value, index, array) => {
  return value > 20;
});

console.log("Input:", inputArr);    //
