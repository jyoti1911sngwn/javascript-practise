const obj ={
    name : "name1",
    class : 23

}

let obj1 = JSON.stringify(obj)
let obj2 = JSON.parse(obj1)
console.log(obj1 , typeof obj1)
console.log(obj2 , typeof obj2)