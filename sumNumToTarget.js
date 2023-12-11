function sumNumbers(nums, target) {
  if (nums.length < 2 || nums.length > 104 || target < -109 || target > 109) {
    return "Enter array of length 2 to 104,\n target between -109 to 109";
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] < -109 || nums[i] > 109) {
        return "Enter array of numbers between -109 to 109";
      }
    }
    for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
        if (nums[i] + nums[j] == target) {
          return [i, j];
        }
      }
    }
  }
}

console.log(sumNumbers([2, 7, 11, 15], 9));
console.log(sumNumbers([3, 2, 4], 6));
console.log(sumNumbers([3, 3], 6));

// Time Complexity O(n^2)
// Space Complexity O(1)
