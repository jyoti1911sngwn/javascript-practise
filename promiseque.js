console.log("start")

const fun = new Promise((res, rej)=>{
    console.log(1)
    res(2)
})

fun.then((res)=> console.log(res))

console.log("end")

//all sync task frst and all async afterwards

console.log("start")

const fun1 = new Promise((res, rej)=>{
    console.log(1)
    res(2)
    console.log(3)
})

fun1.then((res)=> console.log(res))

console.log("end")

console.log("start")

const fun3 = new Promise((res, rej)=>{
    console.log(1)
    console.log(3)
})

fun3.then((res)=> console.log("result", res))

console.log("end")

console.log("start")

function fun4 (){
  return  new Promise((res, rej)=>{
        console.log(1)
        console.log(3)
    })
} 
console.log("middle")
fun4().then((res)=> console.log("result", res))

console.log("end")

// --------------------------------------------
console.log("--------------------------------------------")
function funall(){
    return new Promise((res, rej)=>{
        console.log("rejecting")
        rej();
    })
}

let promise = funall()
promise
    .then(function () {console.log("success 1")})
    .then(function () {console.log("success 2")})
    .then(function () {console.log("success 3")})
    .catch(function () {console.log("err 1")})
    .then(function () {console.log("success 5")})


console.log("**************************************************")

let promise1 = new Promise((res, rej) =>{
    res("first promise");
})

let promise2 = new Promise((res , rej) =>{
    res(promise1);
})

promise2.then((res)=> 
{
    return res ;
}).then((res)=>{
    console.log(res)
})