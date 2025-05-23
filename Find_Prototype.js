if (!Array.prototype.myFind) {
  Array.prototype.myFind = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        if (callback.call(thisArg, this[i], i, this)) {
          return this[i];
        }
      }
    }

    return undefined;
  };
}

const nums = [5, 10, 15, 20];

const found = nums.myFind((num) => num > 12);
console.log("Found Value:", found); 
// Output: 15
