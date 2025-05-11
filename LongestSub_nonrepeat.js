
var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let left=0;
    let  maxLen =0;
    for(let right=0;right<s.length;right++){
        if(map.has(s[right]) && map.get(s[right]) >=left) {
            left = map.get(s[right]) +1 ;
        }
        
        map.set(s[right],right);
    
        const currentwindow = right-left+1;
        maxLen = Math.max(maxLen , currentwindow)
    }
    return maxLen;
    
};

const str = "abccbda";
console.log(lengthOfLongestSubstring(str))
