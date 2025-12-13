try{
    showw("i am show")
}
catch(e){
    console.log(e);
    console.log(e.message);
}
finally{
    console.log('final ')
}


try{
    if(isNaN){
        throw "in nan"
    }
}
catch(e){
    console.log(e);
    // document.write(e);
}
finally{
    console.log('final ')
}

