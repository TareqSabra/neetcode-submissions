class MinStack {
    constructor() {
        this.stack = []
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        const lastIndex = this.stack.length - 1
        return this.stack[lastIndex]
    }

    /**
     * @return {number}
     */
    getMin() {
        const sortedStack = [...this.stack].sort((a, b) => a - b)[0]
        return sortedStack
    }
}
