import { map, forEach } from 'lodash';

export const KEYS = {
  CLIENT: 'c4r-client',
  TOKEN: 'c4r-token',
  UID: 'c4r-uid',
};

const LocalStorage = {
  /**
   * @key: string
   * @return value(string)
   */
  get(key) {
    return localStorage.getItem(key);
  },

  /**
   * @keys: Array
   * ['key1', 'key2', key3']
   * @return values(array)
   */
  getAll(keys) {
    return map(keys, key => this.get(key));
  },

  /**
   * @key: string
   * @value: string
   */
  set(key, value) {
    localStorage.setItem(key, value);
  },

  /**
   * @items: object
   *{
   *  key1(string), value1(string),
   *  key2(string), value2(string)'
   *}
   */
  setAll(items) {
    forEach(items, (value, key) => this.set(key, value));
  },

  /**
   * @key: string
   */
  remove(key) {
    localStorage.removeItem(key);
  },

  /**
   * @key: string
   * @return boolean
   */
  has(key) {
    return this.get(key) !== null;
  },
};

export default LocalStorage;
