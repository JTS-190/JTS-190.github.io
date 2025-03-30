function twoSum(nums, target) {
    if (nums.length < 2) {
        return []; // or throw an error depending on the desired behavior
    }
  
    let numMap = new Map();  // a map to store numbers and their indices
    let result = [];  // array to store the result

    // iterate through the array using a for loop
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];  // get the current number
        let complement = target - num;  // calculates the complement

        // check if complement already exists in the map
        if (numMap.has(complement)) {
            result = [numMap.get(complement), i]; // stores indices  
        }
        // store number with its index
        numMap.set(num, i);
    }

    return result;  // return the result
}

console.log(twoSum([2, 7, 11, 15], 9)); 
console.log(twoSum([3, 2, 4], 6)); 
console.log(twoSum([3, 3], 6)); 
console.log(twoSum([], 9)); 
console.log(twoSum([1], 2)); 
