

function evenodd(arr){
    let even = 0 
    let odd= 0
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i]%2 === 0){
            even++
        }
        else{
            odd++
        }
    }
    return `${even} : ${odd}`
}


const arr = [2,3,4,5,6]
console.log(evenodd(arr))