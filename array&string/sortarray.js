// const arr = [1,2,6,5,4,3,9]
const arr = [1,2,3,4]
// const issort = [...arr].sort()
// console.log(issort)
// const newarr = arr.sort()
// console.log(newarr)

function isSort(arr){
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]<arr[i-1]){
            return false
        }
    }
    return true
}

const res = isSort(arr)
console.log(res,"res_")