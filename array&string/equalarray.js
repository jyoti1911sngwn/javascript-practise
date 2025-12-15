function equalArray(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0 ; i<arr1.length ; i++){
       if(arr1[i] !== arr2[i]){
        return false;
       }
       return true
    }
}

const equal1 = equalArray([1,2,3,4], [1,2,3,4])
const equal2 = equalArray([2,3,1,4], [1,2,3,4])
const equal3 = equalArray([1,2,3], [1, 2])

console.log(equal1, equal2 , equal3)