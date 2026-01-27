


var isValid = function (s) {
  let stack = [];
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

for(let i =0 ; i<s.length ; i++){
    let char = s[i]
   if(char === "(" || char === "{" ||char==="["){
    stack.push(char)
   }
   else{
    if(stack.pop() !== map[char]){
        return false
    }
   }
}
return stack.length===0
};

console.log(isValid("()[]{}")); // true
// console.log(isValid("([])"));   // true
// console.log(isValid("(]"));     // false
