/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  let start = 0;
  let maxlen = 1;
  function palindrome(left, right) {
    if(s.length<=1){
        return s
    }
    while (left>=0 && right<s.length && s[left]===s[right]) {
       let len = right-left + 1;
        if(len>maxlen){
            maxlen = len;
            start= left
        }
      
      right++;
      left--;
    }
  }
  for(let i = 0 ; i<s.length-1 ; i++){
    palindrome(i, i)
    palindrome(i, i+1)
  }
  return s.substring(start, start+maxlen)
};

console.log(longestPalindrome("a"));
