const fetchProduct = require('../async.js');
 
describe('Async', () => {
    // it('async-done', (done) => {
    //     fetchProduct().then((item) => {
    //         expect(item).toEqual({ item: 'Milk', price: 200 });
    //         // toEqual : 괄호 안의 object와 같은지 비교
    //         //done();
    //     });
    // }); 
    it('async - return', () => {
        return fetchProduct().then((item) => {
            expect(item).toEqual({ item: 'Milk', price: 200 });
        });
    });

    it('async - await', async () => {
        const product = await fetchProduct();
        expect(product).toEqual({ item: 'Milk', price: 200 });
    }); 

    it('async - resolves', () => {
        expect(fetchProduct()).resolves.toEqual({ 
            item: 'Milk', 
            price: 200 
        });
    }); 

    // it('async - reject', () => {
    //     expect(fetchProduct('error')).resolves.toEqual({  // error 출력
    //         item: 'Milk', 
    //         price: 200      
    //     });
    // }); 

    it('async - reject', () => {
        expect(fetchProduct('error')).rejects.toBe('network error');
    }); 
});