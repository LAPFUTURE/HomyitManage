export default {
  namespace: 'lap',
  state: {
    user: {
      name: 'LAP',
      age: 20,
    },
  },
  reducers: {
    addOne(state, payload) {
      console.log(state);
      return {
        user: { name: 'XK', age: state.user.age + 1 },
      }
    },
  },
  effects: {
  },
}
