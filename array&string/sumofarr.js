// const arr = [1,2,3,4]

// const sum = arr.reduce((curr, acc)=>{
//     return curr+acc
// })
// console.log(sum)

const arr = [1,2,3,4,5]
let  sum = 0 
for(let i = 0 ; i<arr.length ; i++){
    sum += arr[i]
}
console.log(sum)