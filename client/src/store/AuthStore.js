import BaseStore from './BaseStore';
import { API_URL } from '../config';
import axios from 'axios';
import auth from '../utilis/authen';

export class AuthStore extends BaseStore {
  constructor() {
    super();
    this.observable({});
  }
  async fetchRegister(formData) {
    console.log('form', formData.username);
    try {
      const { data } = await axios.post(`${API_URL}/auth/register`, {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      console.log('regis', data);
    } catch (error) {
      throw error;
    }
  }

  async fetchLogin(formData) {
    console.log('form', formData.username);
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, {
        email: formData.email,
        password: formData.password,
      });
      console.log('login', data);
      auth.signin(data.token, data.user);
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthStore();
