
function removeDuplicates(arr) {
    let uniqueArr = []
    for(let i =0 ; i <arr.length ; i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}



const arr = [1, 2, 3, 4, 4, 5, 5, 6];
console.log(removeDuplicates(arr));