function mergeIntervals(intervals) {
  if (!intervals.length) return [];

  // Step 1: Sort by starting index
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let last = result[result.length - 1];
    let current = intervals[i];

    if (current[0] <= last[1]) {
      // Overlap, merge intervals
      last[1] = Math.max(last[1], current[1]);
    } else {
      result.push(current);
    }
  }

  return result;
}

const input1 = [[1,3],[2,6],[8,10],[15,18]];
console.log("Merged Intervals:", mergeIntervals(input1)); 
// Output: [[1,6],[8,10],[15,18]]
