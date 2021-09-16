"use strict";

let compare = function (stack1, stack2) {
    if (stack1 && stack2 && stack1.length === stack2.length) {
        for (let i = 0; i <= stack1.length; i++) {
            if (stack1[i] !== stack2[i]) {
                return console.log(`The Stacks aren't Equal.`)
            }
        }
        return console.log(`The Stacks are Equal.`)
    }
    return console.log(`The Stacks aren't Equal.`)
}