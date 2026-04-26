import { saveUser } from '../../core/database.js';

export const register = (payload) => {
  saveUser(payload);
  return '我写好了';
};
