class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        const sMap = {};
        const tMap = {};

        s.split('').forEach(letter => {
            sMap[letter] = (sMap[letter] || 0) + 1;
        });

        t.split('').forEach(letter => {
            tMap[letter] = (tMap[letter] || 0) + 1;
        });

        return Object.keys(sMap)
            .every(key => sMap[key] === tMap[key]);
    }
}