const arr = [1,2,3,4,5]
let start = 0
let end = arr.length-1
const target = 4
let result = -1
while(start<=end){
    let mid= Math.floor((start+end)/2)
    if(arr[mid] === target){
        result = mid;
        break;
    }
    else if(arr[mid]<target){
        start = mid+1
    }
    else{
        end= mid-1
    }
}

console.log(result)