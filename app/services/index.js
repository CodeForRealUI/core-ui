import axios from 'axios';

const BASE_URL = 'http://codeforreal.herokuapp.com/';

class AppService {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL || BASE_URL,
    });
  }

  login(email, password) {
    return this.client.post('/api/login', {
      email,
      password,
    }).then((response) => response.data);
  }
  signup(signupData) {
    return this.client.post('/auth', signupData);
  }
}

export default AppService;
