const Stack = require('../stack.js');

describe('Stack', () => {
    let stack;

    beforeEach(() => { // 실행할 때마다 새로운 스택
        stack = new Stack();
    });

    it('is created empty', () => {
        expect(stack.size()).toBe(0);
    });

    it('allows to push item', () => {
        expect(stack.push('🍌'));
        expect(stack.size()).toBe(1);
    });
    
    describe('pop', () => {
        // 스택이 비었을 때 pop하는 경우 Error 발생
        it('throws an error if stack is empty', () => {
            expect(() => {
                stack.pop();
            }).toThrow('Stack is empty');
        });
        // 스택이 비어있지 않을 때 pop
        it('return the last pushed item and removes it from the stack', () => {
            stack.push('🍌');
            stack.push('🍇');

            expect(stack.pop()).toBe('🍇'); // 제일 위의 원소 리턴
            expect(stack.size()).toBe(1); // 해당 원소 pop
            
        });
    });

    describe('peek', () => {
        it('throws an error if stack is empty', () => {
            expect(() => {
                stack.peek();
            }).toThrow('Stack is empty');
        });
        it('returns the last pushed item but keep it in the stack', () => {
            stack.push('🍌');
            stack.push('🍇');

            expect(stack.peek()).toBe('🍇');
            expect(stack.size()).toBe(2);
        });
    });

    
});