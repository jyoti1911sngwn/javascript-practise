

function allzero(arr){
    let count = 0
    let neww = []
    for(let i =0 ; i<arr.length ; i++){
        if(arr[i] === 0){
            count++
        }
        else{
            neww.push(arr[i])
        }
    }
    for(let i = 0 ; i < count ; i++){
        neww.push(0)
    }
    return neww
}

const arr = [1,0,2,0,3,0]
console.log(allzero(arr))