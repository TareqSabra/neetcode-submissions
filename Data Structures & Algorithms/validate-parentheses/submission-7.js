class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for (let letter of s) {
            if (letter == '(') stack.push(')')
            else if (letter == '{') stack.push('}')
            else if (letter == '[') stack.push(']')
            else if (letter !== stack.pop()) {
                return false
            }
        }
        return stack.length == 0
    }
}
