// Stub을 통해 필요한 데이터만 가져올 수 있게 함
class StubProductClient {
    async fetchItems() {
      return [
        { item: '🥛', available: true },
        { item: '🍌', available: false },
      ];
    }
  }
  
  module.exports = StubProductClient;
  