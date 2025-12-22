const obj = {
    name : "abc",
    address : {
        city : "hisar",
        state : "haryana"
    }
}

const clone = JSON.parse(JSON.stringify(obj))
console.log(clone)

console.log('-------------------------------------------')


const newObj = {}
function cloned(obj){
    for (let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = cloned(obj[key])
        }
    }
    return obj;
}
const res = cloned(obj)
console.log('++++++++',res)