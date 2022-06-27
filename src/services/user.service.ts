import { auth, BASE_URL } from '../apis/index'

class UserService {
  async me() {
    return await auth.get(`${BASE_URL}/users/me`);
  }

  async read(id: number) {
    return await auth.get(`${BASE_URL}/users/${id}`);
  }
}

export default new UserService();
