"""
https://leetcode.com/problems/first-unique-character-in-a-string/
387. First Unique Character in a String
"""
from collections import Counter


class Solution:
    def firstUniqChar(self, s: str) -> int:
        myHash = Counter(s)
        for i in range(len(s)):
            if myHash[s[i]] == 1:
                return i
        return -1
