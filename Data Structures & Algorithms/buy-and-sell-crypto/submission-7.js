class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyDay = 0
        let sellDay = 1
        let maxProfit = 0
        while (sellDay < prices.length) {
            const currentProfit = prices[sellDay] - prices[buyDay]
            maxProfit = Math.max(currentProfit, maxProfit)
            if (currentProfit <= 0) {
                buyDay = sellDay
            }
            sellDay++
        }
        return maxProfit
    }
}
