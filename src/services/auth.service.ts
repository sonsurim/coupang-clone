import axios from "axios";
import cookies from "js-cookie";
import { auth, BASE_URL } from "../apis";

type SignupAgreements = {
  privacy: boolean;
  ad:
    | {
        email: boolean;
        sms: boolean;
        app: boolean;
      }
    | false;
};

class AuthService {
  /** refreshToken을 이용해 새로운 토큰을 발급받습니다. */
  async refresh() {
    const { data } = await auth.post(`${BASE_URL}/auth/refresh`);

    if (!data) {
      return
    };

    cookies.set("accessToken", data.access, { expires: 1 });
    cookies.set("refreshToken", data.refresh, { expires: 7 });
  }

  /** 새로운 계정을 생성하고 토큰을 발급받습니다. */
  async signup(
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
    agreements: SignupAgreements
  ) {
    const { data } = await auth.post(
      `${BASE_URL}/auth/signup`,
      { email, password, name, phoneNumber, agreements }
    );

    if (!data) {
      return
    };

    cookies.set("accessToken", data.access, { expires: 1 });
    cookies.set("refreshToken", data.refresh, { expires: 7 });
  }

  /** 이미 생성된 계정의 토큰을 발급받습니다. */
  async login(email: string, password: string) {
    const { data } = await axios.post(`${BASE_URL}/auth/login`, { email, password });

    if (!data) {
      return
    };

    cookies.set("accessToken", data.access, { expires: 1 });
    cookies.set("refreshToken", data.refresh, { expires: 7 });
  }
}

export default new AuthService();
