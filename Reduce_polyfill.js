if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }

    const array = this;
    const length = array.length;
    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
      accumulator = initialValue;
      startIndex = 0;
    } else {
      if (length === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      accumulator = array[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < length; i++) {
      if (i in array) {
        accumulator = callback.call(undefined, accumulator, array[i], i, array);
      }
    }

    return accumulator;
  };
}

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 10

const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product); // 24

const words = ["hi", "hello", "welcome", "bye"];
const longest = words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
console.log("Longest word:", longest); // welcome
