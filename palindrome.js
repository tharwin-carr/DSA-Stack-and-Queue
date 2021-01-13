class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
        top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, then create
        a new node, add data to the new node, and have the pointer point to 
        the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point
        the pointer to the next item and that next item becomes the top
        of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function is_palindrome(s) {
    str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let stack = new Stack();

    for (let i = 0; i < str.length; i++) {
        stack.push(str.charAt(i));
    }

    for (let j = 0; j < str.length; j++) {
        if (str[j] === stack.pop()) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));