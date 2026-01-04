const arr = [1, 2, 3, 4, 4, 5];
let k = 2;

let start = 0
let end = arr.length-1
const n = arr.length
k= k%n
function reverse (arr, start, end){
  while(start<end){
    [arr[start],arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
  return arr
}


const first = reverse(arr, 0, k-1) 
const sec = reverse(arr, k, n-1)
console.log(reverse(arr, start, end))

// console.log(reverse(arr, start, end))
