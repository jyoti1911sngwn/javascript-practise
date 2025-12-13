let  str ="ABCDDCAB"
let str2 = "ABCyDCBA"

let start =0 ;
let end = str2.length-1;
let palindrome = true
while(start< end){
    if(str2[start]!== str2[end]){palindrome=false ; break;}
    start++;
    end--;
}
console.log(palindrome)