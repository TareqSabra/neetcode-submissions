class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const opening = ['(', '{', '['];
        const closing = [')', '}', ']'];
        const stack = [];
        
        // FIX 1: Use a regular loop so 'return false' actually works instantly
        for (const letter of s) {
            if (opening.includes(letter)) {
                if (letter === '(') stack.push(')');
                if (letter === '{') stack.push('}');
                if (letter === '[') stack.push(']');
            }
            
            if (closing.includes(letter)) {
              
                const expectedClosing = stack.pop();
                
                if (expectedClosing !== letter) {
                    return false; 
                }
            }
        }
        
        return stack.length === 0;
    }
} 