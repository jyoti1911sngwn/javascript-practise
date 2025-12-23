const p1 = new Promise((res, req)=> {
    setTimeout(()=>{
        console.log(10)
    },1000)
})
const p2 = new Promise((res, req)=> {
    setTimeout(()=>{
        console.log(20)
    },2000)
})
const p3 = new Promise((res, req)=> {
    setTimeout(()=>{
        console.log(30)
    },3000)
})
Promise.race([p1,p2,p3]).then((res)=>console.log(res))

// Promise.all → waits for all promises to resolve

// Promise.race → settles when the first promise settles (resolve or reject)