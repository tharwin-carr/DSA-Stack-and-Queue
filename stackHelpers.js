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
       if (this.top === null) {
           this.top = new _Node(data, null);
           return this.top;
       }

       const node = new _Node(data, this.top);
       this.top = node;
   }

   pop() {
       const node = this.top;
       this.top = node.next;
       return node.data;
   }
}

function peek(stack) {
    if (stack.top) {
        return stack.top.data;
    }
}

function isEmpty(stack) {
    return stack.top === null;
}

function display(stack) {
    if (isEmpty(stack)) {
        return
    }
    let tempTop = stack.top;

    while(tempTop !==null) {
        console.log(tempTop.data);
        tempTop = tempTop.next;
    }
}