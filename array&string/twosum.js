const arr = [2, 7, 11, 15]
const target = 9 

function twoSum(arr, target){
    let map ={}
    for(let i = 0 ; i<=arr.length ; i++){
        const compliment = target - arr[i]
        if(map[compliment] !== undefined ){
            return [compliment , arr[i]]
        }
        map[arr[i]] = i
    }
    return null

}


const res = twoSum(arr, target);
console.log(res)