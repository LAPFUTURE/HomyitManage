import { message } from 'antd'
import { history } from 'jeem/router'
import { url } from '../../../constants/index'

export default {
  namespace: 'user',
  state: {
    userOne: {
      username: '123',
      password: '123',
    },
  },
  reducers: {},
  effects: {
    async login(state, payload) {
      const { username, password } = payload;
      const emailAndPassword = { email: username, password };
      fetch(`${url}/api/users/test`, {
        method: 'post',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;',
        },
        body: JSON.stringify(emailAndPassword),
      }).then(
        response => response.json(),
      ).then(
        (res) => {
          if (res.statusCode === 200) {
            message.success('Login Successful!');
            console.log(res);
            history.push('/Admin/Todo')
          }
        },
      ).catch(
        err => console.log(err),
      );
    },
  },
}
