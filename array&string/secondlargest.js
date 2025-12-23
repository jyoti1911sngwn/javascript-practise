const arr = [1,2,3,4,5,6]
let max = -Infinity;
let secmax = -Infinity;
for(let i = 0 ; i<arr.length ; i++){
    if(max<arr[i]){
        secmax = max; //previous largest becomes second largest
        max=arr[i]
    }
    else if(arr[i]>secmax && max>arr[i]){
        secmax=arr[i]
    }
}



console.log(secmax, max)