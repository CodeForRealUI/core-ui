import axios from 'axios';

import LocalStorage, { KEYS } from '~/utilities/LocalStorage';
import { getJsonFromUrl } from '../utilities/browser';

const BASE_URL = 'https://damp-beyond-45634.herokuapp.com/';

class AppService {
  constructor(baseURL) {
    const [token, client, uid] = LocalStorage.getAll([KEYS.TOKEN, KEYS.CLIENT, KEYS.UID]);
    this.client = axios.create({
      baseURL: baseURL || BASE_URL,
      headers: {
        'access-token': token,
        client,
        uid,
      },
    });
  }

  login(email, password) {
    return this.client
      .post('/auth/sign_in', {
        user: {
          email,
          password,
        },
      })
      .then(response => response, error => Promise.reject(error.response));
  }

  signup(signupData) {
    return this.client
      .post('/auth', {
        user: signupData,
      })
      .then(response => response, error => Promise.reject(error.response));
  }

  signout() {
    return this.client
      .delete('/auth/sign_out')
      .then(response => response, error => Promise.reject(error.response));
  }

  passwordResetEmail(email) {
    return this.client
      .post('/auth/password', {
        email,
        redirect_url: 'http://localhost:3000/reset-password',
      })
      .then(response => response, error => Promise.reject(error.response));
  }

  passwordReset(password1, password2) {
    const queryParams = getJsonFromUrl();
    return this.client
      .put('/auth/password', {
        password: password1,
        password_confirmation: password2,
        ...queryParams,
      })
      .then(response => response, error => Promise.reject(error.response));
  }

  rolePick(id, payload) {
    return this.client
      .post(`/users/${id}/verify`, {
        user: payload,
      })
      .then(response => response, error => Promise.reject(error.response));
  }
}

export default AppService;
