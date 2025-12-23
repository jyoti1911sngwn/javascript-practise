
function memoized(fn){
    const cache={}
    return function(...args){
        const key = JSON.stringify(args)
        if(cache[key] !== undefined){
            return cache[key]
        }
        const result = fn(...args)
        cache[key] = result
        return result
    }
}
function sum(a,b){
    console.log("calculating...")
    return a+b;
}

const memoize = memoized(sum)
console.log(memoize(3,4))
console.log(memoize(3,4))