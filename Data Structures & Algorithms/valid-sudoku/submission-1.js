class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const rowSet = new Map();
        const colmSet = new Map();
        const sqrSet = new Map();

        for (let row = 0; row < board.length; row++) {
            for (let colm = 0; colm < board[0].length; colm++) {
                if (board[row][colm] === '.') {
                    continue;
                }
                const squareKey = `${Math.floor(row / 3)},${Math.floor(colm / 3)}`;

                if (rowSet.get(row) && rowSet.get(row).has(board[row][colm]) ||
                    colmSet.get(colm) && colmSet.get(colm).has(board[row][colm]) ||
                    sqrSet.has(squareKey) && sqrSet.get(squareKey).has(board[row][colm])
                ) {
                    return false
                }
                if (!rowSet.has(row)) {
                    rowSet.set(row, new Set())
                }
                if (!colmSet.has(colm)) {
                    colmSet.set(colm, new Set())
                }
                if (!sqrSet.has(squareKey)) {
                    sqrSet.set(squareKey, new Set())
                }
                rowSet.get(row).add(board[row][colm]);
                colmSet.get(colm).add(board[row][colm]);
                sqrSet.get(squareKey).add(board[row][colm]);
            }


        }
        return true
    }
}
