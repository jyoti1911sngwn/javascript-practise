function promisefunc(dataid){
   return new Promise((resolve ,reject)=>{

        setTimeout(()=>{
            console.log(dataid)
            resolve("success"); // imp
        }, 2000)
    })
}

let pro = promisefunc(2).then(()=>promisefunc(3).then(()=>promisefunc(4)))
pro.then((res)=>console.log(res))
pro.catch((err)=>console.log(err))
console.log(pro);