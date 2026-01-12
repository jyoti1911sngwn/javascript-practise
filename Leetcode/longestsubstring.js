



var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let idx = 0;
    let maxLen = 0;
    let startLen = 0 

    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[idx]);
            idx++;
        }

        set.add(s[i]);
        maxLen = Math.max(maxLen, i - idx + 1);
        // if(i - idx + 1>maxLen){
        //     maxLen = i - idx + 1;
        //     startLen = idx
        // }
        // console.log(set)
    }
console.log(set)
    return maxLen;
    // return s.substring(startLen, startLen+maxLen)
};

console.log(lengthOfLongestSubstring("bbbbbb")); 
