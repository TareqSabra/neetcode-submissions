class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const records = {} // key ( letters ) => [list of words that fit in it ]
        strs.forEach(((str)=>{
            const key = str.split('').sort()
            if(!records[key]){
             records[key] = []
            }
             records[key].push(str)
        }))
        return Object.values(records)
    }
}
