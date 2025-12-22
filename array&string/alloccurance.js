const arr = [1, 2, 3, 4, 5, 4, 4, 4];
const target = 4;
const newarr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] === target) {
    newarr.push(i);
  }
}
console.log(newarr);
