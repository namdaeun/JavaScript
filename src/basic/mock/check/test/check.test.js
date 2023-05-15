const check = require('../check');

describe('check', () => {
    let onSuccess;
    let onFail;

    beforeEach(() => {
        onSuccess = jest.fn();
        onFail = jest.fn();
    });

    it('should call onSuccess when predicate is true', () => {
        check(() => true, onSuccess, onFail);

        // expect(onSuccess.mock.calls.length).toBe(1); // onSuccess가 한 번은 출력됨
        expect(onSuccess).toHaveBeenCalledTimes(1);
        // expect(onSuccess.mock.calls[0][0]).toBe('yes'); // onSuccess가 호출될 때 첫번째 인자로 yes가 전달됨
        expect(onSuccess).toHaveBeenCalledWith('yes');
        // expect(onFail.mock.calls.length).toBe(0); // onFail 함수는 한 번이라도 호출되면 안됨
        expect(onFail).toHaveBeenCalledTimes(0);
    });

    it('should call onSuccess when predicate is false', () => {
        check(() => false, onSuccess, onFail);

        // expect(onSuccess.mock.calls.length).toBe(1); // onSuccess가 한 번은 출력됨
        expect(onFail).toHaveBeenCalledTimes(1);
        // expect(onSuccess.mock.calls[0][0]).toBe('yes'); // onSuccess가 호출될 때 첫번째 인자로 yes가 전달됨
        expect(onFail).toHaveBeenCalledWith('no');
        // expect(onFail.mock.calls.length).toBe(0); // onFail 함수는 한 번이라도 호출되면 안됨
        expect(onSuccess).toHaveBeenCalledTimes(0);
    });
});