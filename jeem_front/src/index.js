import jeem from 'jeem';
import global from './models/global'
import todo from './pages/Admin/Todo/models/todo';
import user from './pages/Login/models/user'
import lap from './pages/Admin/User/Alex/models/index'

const app = jeem();

app.init({
  models: {
    global,
    todo,
    user,
    lap,
  },
});

app.router(require('./router'));

app.start('#app');

module.hot && module.hot.accept();
