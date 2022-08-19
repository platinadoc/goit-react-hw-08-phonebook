const { createSlice } = require('@reduxjs/toolkit');
const {
  registerThunk,
  logInThunk,
  logOutThunk,
  getCurrentUserThunk,
} = require('./authOperations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [registerThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [registerThunk.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [registerThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [logInThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logInThunk.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logInThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [logOutThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [logOutThunk.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOutThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [getCurrentUserThunk.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [getCurrentUserThunk.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
    [getCurrentUserThunk.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default authSlice.reducer;
