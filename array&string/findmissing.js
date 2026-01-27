

function findmissing(arr){
    let actsum = 0 
    let n = arr.length 
    let exptsum = n*(n+1) / 2
    for(let i =0 ; i<arr.length ; i++){
        actsum += arr[i]
    }
    console.log("exptsum :",exptsum , "actsum :" , actsum)
    let diff =  actsum-exptsum
    return diff
}


const arr = [1,2,4,5,6]
console.log(findmissing(arr))

// 1+2+3+4+5+6