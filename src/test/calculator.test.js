const Calculator = require('../calculator.js');

// 독립적으로 동작하는 게  중요!
// -> beforeEach()사용 - 테스트 전에 공통적으로 실행하는 코드
// +) afterEach() - 테스트가 끝나고 공통적으로 수행하는 코드
// +) beforeAll() - 테스트 전에 한 번만 실행
// +) afterAll() - 테스트 후에 한 번만 실행
 
describe('Calculator', () => {
    let cal;
    beforeEach(() => {
        cal = new Calculator();
    });

    it('inits with 0', () => {  
        expect(cal.value).toBe(0);
    });

    it('sets', () => {
        cal.set(9);
        expect(cal.value).toBe(9);
    });

    it('clear', () => {
        cal.set(9);
        cal.clear();

        expect(cal.value).toBe(0);
    });

    it('adds', () => {
        cal.set(1);
        cal.add(2);

        expect(cal.value).toBe(3);
    });

    it('add should throw an error if value is greater than 100', () => {
        expect(() => { 
            cal.add(101); // 에러가 던져지길 예상되는 코드 작성
        }).toThrow('Value can not be greater than 100'); // 에러 코드
    });

    it('subtracts', () => {
        cal.set(3);
        cal.subtract(2);

        expect(cal.value).toBe(1);
    });

    it('multiplies', () => {
        cal.set(3);
        cal.multiply(2);

        expect(cal.value).toBe(6);
    });

    describe('divides', () => {
        it('0 / 0 === NaN', () => {
            cal.divide(0);
            expect(cal.value).toBe(NaN);
        });
        it('1 / 0 === Infinity', () => {
            cal.set(1);
            cal.divide(0);
            expect(cal.value).toBe(Infinity);
        });
        it('4 / 4 === 1', () => {
            cal.set(4);
            cal.divide(4);
            expect(cal.value).toBe(1);
        });
    });
});