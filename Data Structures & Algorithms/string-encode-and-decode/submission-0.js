class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ''
        for (const str of strs) {
            result = result + str.length + "#" + str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // find separator #
            while (str[j] !== "#") {
                j++;
            }

            const length = Number(str.slice(i, j));
            const wordStart = j + 1;
            const wordEnd = wordStart + length;

            const word = str.slice(wordStart, wordEnd);
            result.push(word);

            i = wordEnd;
        }

        return result;
    }
}
