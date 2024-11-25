import BaseRepository from "./BaseRepository";

class AuthRepository extends BaseRepository {
  constructor(apiAdapter) {
    super(apiAdapter);
  }

  async login(username, password) {
    return await this.apiAdapter.post('/login', { username, password });
  }

  async getUserByToken(token) {
    return await this.apiAdapter.get(`/me`, { Authorization: `Bearer ${token}` });
  }
}

export default AuthRepository;
