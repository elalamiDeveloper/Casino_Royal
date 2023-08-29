import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  token: '',
  user: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      localStorage.setItem('casino-royal-token', action.payload.token);
      state.isAuth = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    logout(state) {
      localStorage.removeItem('casino-royal-token');
      state.isAuth = false;
      state.token = '';
      state.user = {};
    },
  },
});

const authActions = authSlice.actions;

export { authActions };
export default authSlice.reducer;
