


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = Math.abs(x).toString()
    let newstr = ""
    let sign = x<0 ? -1 : 1
    for(let i = str.length-1 ; i>=0 ; i--){
        newstr+=str[i]
    }
 let result = sign * Number(newstr);

    if (result < -2147483648 || result > 2147483647) {
        return 0;
    }

    return result;
};

console.log(reverse(123))