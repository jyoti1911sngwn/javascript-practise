const arr = [1,2,3,[4,5,[6,7,[8]]]]
let newarr = [] 
function recFlat(arr){

    for(let i = 0 ; i<arr.length; i++){
        if(Array.isArray(arr[i])){
             recFlat(arr[i])
        }
        else{
           newarr.push(arr[i])
        }
    }
}
recFlat(arr)
console.log("arr1",newarr)

console.log("--------------------------------------------------------")


const arr1 = [1,2,3,[4,5,[6,7,[8]]]]
const flatten =(arr1) => {
    return arr1.reduce((acc, curr)=> 
    Array.isArray(curr) ? acc.concat(flatten(curr)) : acc.concat(curr) , []) // initial accumulator
}
console.log("arr2" , flatten(arr1))

console.log("--------------------------------------------------------")



const arr3 = [1,2,3,[4,5,[6,7,[8]]]]

const newarr3 = arr3.flat(3)

console.log("arr3",newarr)

