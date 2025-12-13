function higherorderfun(a, b){
    return a+b
}

function cb (a, b, func){
    return func(a , b)
}

var res = cb(2,4 , higherorderfun)
console.log(res)