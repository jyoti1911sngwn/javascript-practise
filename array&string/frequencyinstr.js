
function freqStr(str){
    let strMap = {}
    for(let i =0 ; i<str.length; i++){
        if(strMap[str[i]]){
            strMap[str[i]]++
        }
        else{
            strMap[str[i]]= 1
        }
    }
    console.log(strMap)
}

const str = "asasddtyi"
freqStr(str)