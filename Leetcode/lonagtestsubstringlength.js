




var lengthOfLongestSubstring = function(s) {
    let set=new Set();
    let idx = 0 
    let maxLen = 0
    for(let i = 0 ; i< s.length; i++){
        while(set.has(s[i])){
            set.delete(s[idx])
            idx++
        }
        set.add(s[i])
        maxLen = Math.max(maxLen,i-idx+1);
    }
    return maxLen
};

console.log(lengthOfLongestSubstring("bbbbb"))