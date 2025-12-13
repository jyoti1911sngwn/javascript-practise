function allfunc(dataid){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log(dataid);
            res('resolved')
        }, 2000)
    })
}

Promise.all([
    allfunc(2),
    allfunc(3),
    allfunc(4)
]).then((res)=> console.log(res)).catch((err)=>console.log(err))

Promise.race([
    allfunc(2),
    allfunc(3),
    allfunc(4)
]).then((res)=> console.log(res)).catch((err)=>console.log(err))

Promise.any([
    allfunc(2),
    allfunc(3),
    allfunc(4)
]).then((res)=> console.log(res)).catch((err)=>console.log(err))

Promise.allsettled([
    allfunc(2),
    allfunc(3),
    allfunc(4)
]).then((res)=> console.log(res)).catch((err)=>console.log(err))



// Promise.all()	    Resolved: When ALL succeed	    Rejected: If ANY fail	               Use: Load multiple APIs before showing UI
// Promise.race()	    Resolved: First to finish wins	Rejected: First to finish can reject.  Use: Timeout backups
// Promise.any()	    Resolved: First SUCCESS	        Rejected: Only if ALL fail	           Use: Try multiple servers, use first working one
// Promise.allSettled()	Resolved: After ALL finish	    Rejected: Never rejects	               Use: Show final report of all operations