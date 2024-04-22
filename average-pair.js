// add whatever parameters you deem necessary
function averagePair(nums, target) {
    left = 0;
    right = nums.length - 1;

    if (nums.length < 2){
        return false
    }

    while (left < right){
        let current_avg = (nums[left] + nums[right]) / 2;
        if (current_avg < target){
            left += 1;
        }
        else if (current_avg > target){
            right -= 1;
        }
        else{
            return True
        }
    }
    return true
}
