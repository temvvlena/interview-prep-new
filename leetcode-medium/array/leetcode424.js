/**
 * @param {string} s
 * @param {number} k
 * @return {number}

 https://leetcode.com/problems/longest-repeating-character-replacement/
 Longest Repeating Character Replacement
 */
var characterReplacement = function(s, k) {
    let max = 0;
    let start = 0;
    let initial = k;
    if (s.length === 1) return 1;

    for (let i=0; i < s.length; i++) {  // AABAB     k = 0;  i = 5; BA
        if (s[start] !== s[i]) {
            if (k > 0){
                k--;
            } else {
                max = Math.max(max, i - start); // max = 5;
                k = initial;  // k = 2;

                while (s[start] === s[start + 1] && start + 1 < s.length){
                    start++;
                }
                start++;
                i = start;
            }
        }
    }
    max = Math.max(max, s.length - Math.max(start - k, 0 )); //BAAAAAAA



    start = s.length - 1;

    for (let i = s.length - 1; i >= 0; i--) {  // AABAB     k = 0;  i = 5; BA
        if (s[start] !== s[i]) {
            if (k > 0){
                k--;
            } else {
                max = Math.max(max, start - i); // max = 5;
                k = initial;  // k = 2;

                while (s[start] === s[start - 1] && start - 1 >= 0){
                    start--;
                }
                start--;
                i = start;
            }
        }
    }
    max = Math.max(max, Math.min(s.length - 1, start + k) + 1);

    return max;
};