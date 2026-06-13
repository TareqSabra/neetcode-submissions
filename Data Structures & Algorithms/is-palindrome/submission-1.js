class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let firstIndex = 0
        let lastIndex = s.length - 1
        while (firstIndex < lastIndex) {
            if (!/[a-zA-Z0-9]/.test(s[firstIndex])) {
                firstIndex++
                continue;
            }
            if (!/[a-zA-Z0-9]/.test(s[lastIndex])) {
                lastIndex--
                continue;
            }
            if (s[firstIndex].toLocaleLowerCase() !== s[lastIndex].toLocaleLowerCase()) {
                return false
            }
            else {
                firstIndex++
                lastIndex--
            }
        }
        return true

    }
}
