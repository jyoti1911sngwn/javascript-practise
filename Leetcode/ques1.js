/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    console.log(n)
    return function() {
        console.log(n)
    //    return n= n+1
       return n++
    };
};

const counter = createCounter(10)
 console.log("0")
 counter() // 10
 console.log("1")
 counter() // 11
 console.log("2")
 counter() // 12
 console.log("3")
 