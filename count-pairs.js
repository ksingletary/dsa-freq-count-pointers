function countPairs(nums, target) {
    // Create an empty set to store the numbers encountered
    const seen = new Set();
    // Variable to store the count of pairs
    let count = 0;

    // Iterate through the array
    for (let num of nums) {
        // Calculate the complement of num
        const complement = target - num;
        // Check if the complement exists in the set
        if (seen.has(complement)) {
            count++;
        }
        // Add the current num to the set
        seen.add(num);
    }

    // Return the count of pairs
    return count;
}

// Example test cases
console.log(countPairs([3,1,5,4,2], 6)); 
console.log(countPairs([10,4,8,2,6,0], 10)); 
console.log(countPairs([4,6,2,7], 10)); 
console.log(countPairs([1,2,3,4,5], 10)); 
console.log(countPairs([1,2,3,4,5], -3)); 
console.log(countPairs([0,-4], -4)); 
console.log(countPairs([1,2,3,0,-1,-2], 0)); 
