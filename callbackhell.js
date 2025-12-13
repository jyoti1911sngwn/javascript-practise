function getdata(dataid , nextdata) {
    setTimeout(()=>{
        console.log(dataid);
        if(nextdata){
             nextdata();
        }
        else{
            return
        }
    }, 2000)
}

getdata(2, ()=>{
    getdata(3 , ()=>{
        getdata(4, ()=>{
            getdata(5)
        })
    })
})




