const arr = [1, 2, 3, 4, 4, 5];
let k = 2;

const n = arr.length;
k = k % n;

reverse(arr, 0, n - 1);
reverse(arr, 0, k - 1);
reverse(arr, k, n - 1);

console.log(arr);

function reverse(a, start, end) {
  while (start < end) {
    [a[start], a[end]] = [a[end], a[start]];
    start++;
    end--;
  }
}
