Array.prototype.myMap = function(callback, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myMap called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const result = [];
  const array = this;
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      result.push(callback.call(thisArg, array[i], i, array));
    }
  }
  return result;
};


const arr = [1, 2, 3];

const doubled = arr.myMap((num) => num * 2);
console.log(doubled); // [2, 4, 6]
