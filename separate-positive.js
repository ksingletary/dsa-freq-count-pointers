function separatePositive(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        if (nums[left] > 0) {
            left++;  // Move the left pointer right if the current element is positive
        } else if (nums[right] < 0) {
            right--;  // Move the right pointer left if the current element is negative
        } else {
            // Swap the elements at the left and right pointers
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    
    return nums;
}

// Example test cases
console.log(separatePositive([2, -1, -3, 6, -8, 10]));  
console.log(separatePositive([5, 10, -15, 20, 25]));  
console.log(separatePositive([-5, 5]));  
console.log(separatePositive([1, 2, 3]));  
