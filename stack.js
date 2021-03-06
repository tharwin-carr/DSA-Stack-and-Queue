//Creates a node containing the data and a reference to the next item
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

const starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');


const peek = stack => {
    if(stack.top === null){return null}
    return stack.top.data
}

const isEmpty = stack => {
    return stack.top === null
}

const display = stack => { 
    let current = stack.top;
    while (current !== null) { 
        console.log(current.data);
        current = current.next;
    }
 }



starTrek.pop();
starTrek.pop();


function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    const chars = new Stack();
    for(let i = 0; i < s.length; i++){
        chars.push(s[i]);
    }

    let palandrome = true;
    let i = 0
    while(chars.top !== null){
        const char = chars.pop();
        if(char !== s[i]){
            palandrome = false;
            break; 
        }
        i++
    }
    return palandrome
}

const sort = stack => {
    const newStack = new Stack();

    while(!isEmpty(stack)){
        
        if(isEmpty(newStack)){
            
            newStack.push(stack.pop())
        }else if(peek(stack) <= peek(newStack)){
           
            newStack.push(stack.pop())
        }else if(peek(stack) > peek(newStack)){
            const tempVar = stack.pop();
           
            while(!isEmpty(newStack) && tempVar > peek(newStack)){
                
                stack.push(newStack.pop())
            }
            newStack.push(tempVar)
        }

        
    }

    return newStack
}


function matchingParentheses(s) {
    const parens = new Stack();
    for (let i = 0; i < s.length; i++) { 
        if (s[i] === "(") {
            parens.push({
                data: s[i],
                index: i});
        }
        else if (s[i] === ")") { 
            try {
                parens.pop();
            }
            catch(error) { 
                return "There is an open parentheses at char " + i
            }
            
        }
        
    }
    if (parens.top !== null) { 
        return "There is an extra open parentheses at " + parens.top.data.index;
    }
    return "Matching parentheses"
  
}
let numStack = new Stack()
numStack.push(3)
numStack.push(4)
numStack.push(2)
numStack.push(5)
numStack.push(1)
numStack.push(7)
numStack = sort(numStack)
display(numStack)