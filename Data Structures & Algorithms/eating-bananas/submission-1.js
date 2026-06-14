class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = 1
        let max = Math.max(...piles)
        let res = max
        while (min <= max) {
            const k = Math.floor((max + min) / 2)
            let totalTime = 0
            for (const p of piles) {
                totalTime += Math.ceil(p / k)
            }
            if (totalTime <= h) {
                res = k
                max = k - 1

            }
            else {
                min = k + 1
            }

        }
        return res
    }
}
