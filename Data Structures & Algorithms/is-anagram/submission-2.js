class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }
        const sMap = new Map();
        const tMap = new Map();
        s.trim().split('').forEach((string) => {
            sMap[string] = (sMap[string] || 0) + 1
        })
        t.trim().split('').forEach((string) => {
            tMap[string] = (tMap[string] || 0) + 1
        })

        return Object.keys(sMap).every(key=>sMap[key]===tMap[key])
        
    }
}
