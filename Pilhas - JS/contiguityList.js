"use strict";

class contiguityList {
    constructor(size) {
        this.vetor = [];
        this.base = 0
        this.limit = size - 1;
        this.top = -1;
        return console.log(`Created.`)
    }
    stack(data) {
        if (this.vetor === undefined) {
            return console.log(`Stack not instantiated`)
        }
        if (this.top < this.limit) {
            this.top++;
            this.vetor[this.top] = data;
            return console.log(`Stacked.`)
        }
    }
    remove() {
        if (this.top >= this.base) {
            this.top--;
            return console.log(`Removed.`)
        } else {
            return console.log(`Already Empty.`)
        }

    }
    show() {
        if (this.top >= this.base) {
            return console.log(this.vetor[this.top])
        } else {
            return console.log(`Is Empty.`)
        }
    }
    destroy() {
        this.top = -1
        this.vetor = undefined
        return console.log(`Destroyed.`)
    }
    toCompare() {
        let list = []
        for (let i = this.top; i >= this.base; i--) {
            list[i] = this.vetor[i]
        }
        return list
    }
}

console.log(`Contiguity List:`)
let list1 = new contiguityList(10)
list1.stack(2)
list1.stack(5)
list1.destroy()
list1.show()
list1.stack(2)
list1 = new contiguityList(10)
list1.stack(4)
list1.remove()
list1.stack(5)
list1.show()
