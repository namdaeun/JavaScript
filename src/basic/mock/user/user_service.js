class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLogedIn = false;
  }

  login(id, password) {
    if (!this.isLogedIn) {
      //return fetch('http://example.com/login/id+password') //
      // .then((response) => response.json());
      return this.userClient // 네트워크 의존성을 피하기 위해 다음과 같이 작성
        .login(id, password) //
        .then((data) => (this.isLogedIn = true)); // 로그인을 두 번 이상 호출하는 경우 
    }
  }
}

module.exports = UserService;
