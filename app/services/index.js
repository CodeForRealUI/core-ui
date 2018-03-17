import axios from 'axios';

const BASE_URL = 'https://damp-beyond-45634.herokuapp.com/';

class AppService {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL || BASE_URL,
    });
  }

  login(email, password) {
    return this.client.post('/auth/sign_in', {
      email,
      password,
    });
  }

  signup(signupData) {
    return this.client.post('/auth', signupData).then((response) => response,
      (error) => Promise.reject(error.response));
  }
}

export default AppService;
