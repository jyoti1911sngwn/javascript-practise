// let arr = [1,2,3,4, 7]

// let max = 0;

// for( let i = 0 ; i <arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max)

let arr = [1,2,3,4]
let num = arr.reduce((acc, curr) =>  {return acc>curr? acc : curr})
console.log(num )