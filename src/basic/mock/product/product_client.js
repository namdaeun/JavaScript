class ProductClient {
    fetchItems() {
        return this.fetch('http://example.com/login/id+password').then((response) => 
            response.json()
        
        );
    }
}
module.exports = ProductClient;