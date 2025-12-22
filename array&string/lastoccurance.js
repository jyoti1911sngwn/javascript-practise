const arr= [1,2,3,4,5 ]
const target = 4

for(let i =arr.length-1 ; i>=0 ; i--){
    if(arr[i] === target)
    {console.log(i)}
}


let start = 0
let end = arr.length-1
let result
while(start<=end){
let mid = Math.floor((end+start)/2)
if(arr[mid]===target){
    result = mid;
    end = mid-1;
}
else if(arr[mid]<target){
    start = mid+1;
}
else{
    end = mid-1;
}
}
console.log("result", result)