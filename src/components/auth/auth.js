class Auth {
    constructor() {
      this.authenticated = false;
    }
  
    login(cb) {
      this.authenticated = true;
      localStorage.setItem('isLoggedIn', this.authenticated)
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      localStorage.removeItem('isLoggedIn')

      cb();
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();
  