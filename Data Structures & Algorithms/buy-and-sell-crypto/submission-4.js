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
            const currentPofit = prices[sellDay] - prices[buyDay]
            if (currentPofit > maxProfit) {
                maxProfit = currentPofit
            }
            if (currentPofit <= 0) {
                buyDay = sellDay;
            }
            sellDay++;

        }
        return maxProfit
    }
}
