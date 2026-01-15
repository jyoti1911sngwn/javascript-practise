/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let sum
    let result = []
    for (let i = 0 ; i <nums.length-1 ; i++){
        let start = i+1
        let end = nums.length-1
        if(i>0 && nums[i]===nums[i-1])continue;
        while(start<end){
            sum = nums[i] + nums[start] + nums[end]
            if(sum===0 ){
                result.push(nums[i], nums[start], nums[end])
                while(start<end && nums[start]===nums[start+1])start++;
                while(start>end && nums[end]===nums[end-1]) end--;
                start++;
                end--;
            }
            else if(sum<0){
                start++
            }
            else{
                end--
            }
        }
    }
    return result
};


console.log(threeSum([-1,0,1,2,-1,-4]
))