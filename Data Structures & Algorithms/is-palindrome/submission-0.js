class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
     let firstIndex = 0
     let finalIndex = s.length-1
     while(firstIndex<finalIndex){
        if (!/[a-zA-Z0-9]/.test(s[firstIndex])) {
            firstIndex++;
            continue;
        }
        if (!/[a-zA-Z0-9]/.test(s[finalIndex])) {
            finalIndex--;
            continue;
        }
        if(s[firstIndex].toLowerCase()!==s[finalIndex].toLowerCase()){
            return false
        }
        firstIndex ++
        finalIndex --
     }
     return true
    }
}
