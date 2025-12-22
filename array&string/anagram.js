const str1 = "qwerty"
const str2 = "ytrewq"

if(str1.length !== str2.length){
 console.log("not equal");
}

const newstr1 = str1.split("").sort().join('')
const newstr2 = str2.split("").sort().join('')

if(newstr1 === newstr2){
    console.log("equal")
}
else{
    console.log("not equal")
}

console.log("------------------------------------")

function anagram (str1 , str2){
    let count = {}
    for(let char of str1){
        count[char] = (count[char] || 0) + 1
    }
    for (let char of str2){
        if( !count[char]) return false;
        count[char]--
    }
    return true
}


const res2 = anagram(str1 , str2)
console.log(res2)