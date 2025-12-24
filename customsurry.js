function mycurry(fn){
    return function curried(...args){
        if(args.length >= fn.length){
            return fn(...args)
        }
        return function(...nextargs){
            curried(...args, ...nextargs)
        }
    }
}

function add(a, b,c){
    return a+b+c
}

const res= mycurry(add)
console.log(res(1,2,3))