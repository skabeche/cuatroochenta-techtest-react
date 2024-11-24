class AuthRepository {
  constructor(apiAdapter) {
    this.apiAdapter = apiAdapter;
  }

  async login(username, password) {
    return await this.apiAdapter.post('/login', { username, password });
  }

  async getUserByToken(token) {
    return await this.apiAdapter.get(`/me`, { Authorization: `Bearer ${token}` });
  }
}

export default AuthRepository;
