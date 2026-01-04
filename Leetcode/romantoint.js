/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map ={
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let total = 0;
    for(let i =0 ; i<s.length ; i++){
        let currnt = map[s[i]]
        let next = map[s[i+1]]
        if(next && currnt<next){
            total-=currnt
        }
        else{
            total+=currnt
        }
    }
    return total
};

console.log(romanToInt("MCMXCIV")) //1994
console.log(romanToInt("LVIII")) //58
console.log(romanToInt("III")) //3