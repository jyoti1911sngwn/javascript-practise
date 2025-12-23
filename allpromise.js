const p1 = Promise.resolve(10)
const p2 = Promise.resolve(20)
const p3 = new Promise((res, req)=>{
    setTimeout(()=>{
        res(30)
    },5000)
})


Promise.all([p1,p2,p3]).then((res)=>console.log(res))