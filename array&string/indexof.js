const arr = [1, 4, 3, 2, 4];
const num = 4;
// const res1 = arr.indexOf(num)
// const res2 = arr.findIndex((val) => {return num === val})
// console.log(res1, res2)
function func() {
  // for(let i = 0 ; i<arr.length ; i++){
  //     if(arr[i] === num){
  //         return i
  //     }
  // }

  let left = 0;
  let right = arr.length - 1;
  let result;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

const res = func();
console.log(res);
