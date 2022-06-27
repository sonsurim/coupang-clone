import { auth, BASE_URL } from '../apis/index'

class UserService {
  async me() {
    return auth.get(`${BASE_URL}/users/me`);
  }

  async read(id: number) {
    return auth.get(`${BASE_URL}/users/${id}`);
  }
}

export default new UserService();
