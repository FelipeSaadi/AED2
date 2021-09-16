"use restrict"

class Node {
    constructor(data = null) {
        this.data = data
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = new Node()
        this.size = 0
        return console.log(`Created.`)
    }
    empty() {
        if (this.head === undefined) {
            return true
        } else {
            return false
        }
    }
    stack(data) {
        if (this.head === undefined) {
            return console.log(`Stack not instantiated`)
        }
        if (this.empty()) {
            this.head = new Node(data)
            this.size++
        } else {
            let newNode = new Node(data)
            newNode.next = this.head
            this.head = newNode
            this.size++
        }
        console.log(`Stacked.`)
    }
    remove() {
        if (this.empty()) {
            return console.log(`Already Empty.`)
        } else {
            this.head = this.next
            this.size--
            return console.log(`Removed.`)
        }
    }
    show() {
        if (!this.empty()) {
            return console.log(this.head.data)
        } else {
            return console.log(`Is Empty.`)
        }
    }
    destroy() {
        while (!this.empty()) {
            this.remove()
        }
        this.size = 0
        return console.log(`Destroyed.`)
    }
    toCompare() {
        if (this.head != null) {
            let list = []
            let currentNode = this.head
            let index = this.size - 1

            while (currentNode.data !== null) {
                list[index] = currentNode.data
                currentNode = currentNode.next
                index--
            }
            return list
        }
    }
}

console.log(`
LinkedList:`
)
let list2 = new linkedList()
list2.stack(2)
list2.destroy()
list2.show()
list2.stack(2)
list2 = new linkedList()
list2.stack(5)
list2.show()