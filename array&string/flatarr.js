const arr = [[1,[2,[3,[4]]]], 2]
// const newarr = arr.flat(5)
// const newarr = arr.flat(Infinity)
const newarr=[]
function flatten(arr){

    for ( let i = 0 ; i<arr.length ; i++){
        if(Array.isArray(arr[i])){
            flatten(arr[i])
        }
        else{
            newarr.push(arr[i])
        }
    }
}

flatten(arr);
console.log(newarr)