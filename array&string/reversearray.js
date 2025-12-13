// const arr = [1,2,3,4]
// const temp = []
// for(let i = arr.length-1 ; i>=0 ; i--){
//     temp.push(arr[i])
// }
// console.log(temp)



const arr = [1,2,3,4]
let left = 0 ;
let right = arr.length-1;
while(left<right){
    [arr[left] , arr[right]] = [arr[right] , arr[left]] ;
    left++;
    right--;
}
console.log(arr)