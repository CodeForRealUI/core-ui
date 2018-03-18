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
    return this.client
      .post('/auth', signupData)
      .then((response) => response, (error) => Promise.reject(error.response));
  }

  passwordResetEmail(email) {
    return this.client
      .post('/auth/password', {
        email,
        redirect_url: 'http://localhost:3000/reset-password',
      })
      .then((response) => response, (error) => Promise.reject(error.response));
  }
  passwordReset(password1, password2) {
    function getJsonFromUrl() {
      const query = location.search.substr(1);
      const result = {};
      query.split('&').forEach((part) => {
        const item = part.split('=');
        result[item[0]] = decodeURIComponent(item[1]);
      });
      return result;
    }
    const queryParams = getJsonFromUrl();
    return this.client
    .put('/auth/password', {
      password: password1,
      password_confirmation: password2,
      ...queryParams,
    })
    .then((response) => response, (error) => Promise.reject(error.response));
  }
}

export default AppService;
