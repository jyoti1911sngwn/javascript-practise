 function getdata (dataid){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(dataid);
             resolve("done"); 
        }, 5000);
    })
}

async function getall(){

    await getdata(2);
    await getdata(3);
    await getdata(4)
}

getall()