import axios from 'axios';

import LocalStorage, { KEYS } from '~/utilities/LocalStorage';

const BASE_URL = 'https://damp-beyond-45634.herokuapp.com/';

class AppService {
  constructor(baseURL, headers) {
    const [token, client, uid] = LocalStorage.getAll([
      KEYS.TOKEN,
      KEYS.CLIENT,
      KEYS.UID,
    ]);
    this.client = axios.create({
      baseURL: baseURL || BASE_URL,
      headers: {
        'access-token': token,
        client,
        uid,
        'X-Key-Inflection': 'camel',
        ...headers,
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
        redirect_url: `${window.origin}/reset-password`,
      })
      .then(response => response, error => Promise.reject(error.response));
  }

  passwordReset(password1, password2) {
    return this.client
      .put('/auth/password', {
        password: password1,
        password_confirmation: password2,
      })
      .then(response => response, error => Promise.reject(error.response));
  }

  rolePick(id, payload) {
    return this.client
      .patch(`/users/${id}/verify`, {
        user: payload,
      })
      .then(response => response, error => Promise.reject(error.response));
  }

  getUserObject() {
    return this.client
      .get('/users/me')
      .then(response => response, error => Promise.reject(error.response));
  }

  getProjects() {
    return this.client
      .get('/projects')
      .then(response => response.data, error => Promise.reject(error.response));
  }

  getMyProjects() {
    return this.client
      .get('/projects/me')
      .then(response => response.data, error => Promise.reject(error.response));
  }
  getFavoriteProjects() {
    return this.client
      .get('/projects/favorites')
      .then(response => response.data, error => Promise.reject(error.response));
  }
}

export default AppService;
