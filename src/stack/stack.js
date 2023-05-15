class Stack {
    constructor() {
        this._size = 0;
        this.head = null; // 다음 아이템을 가리킴
    }
    size() {
        return this._size;
    }
    push(item) {
        const node = { item, next: item.head };
        this.head = node;
        this._size++; 
    }
    pop() {
        if (this.head === null) {
            throw new Error('Stack is empty');
        }
        const node = this.head; // pop하고자 하는 item은 head가 가리키고 있음
        this.head = node.next;
        this._size--;
        return node.item;
    }
    peek() {
        if (this.head === null) {
            throw new Error('Stack is empty');
        }
        return this.head.item
    }

}
module.exports = Stack;