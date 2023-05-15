class ProductService {
    constructor(productClient) {
      this.productClient = productClient; // 의존성 없애기 위해 인자로 받아옴
    }
  
    fetchAvailableItems() {
      return this.productClient
        .fetchItems()
        .then((items) => items.filter((item) => item.available));
    }
  }
  
  module.exports = ProductService;
  