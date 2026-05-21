class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const outputArray = []
        for (let i = 0 ; i<=n ; i++){
            let count = 0
            let temp = i;
            while(temp!==0){
                count +=(temp&1)
                temp>>>=1
            }
            outputArray.push(count)
            
        }
        return outputArray
    }
}
