import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false, //로그인 여부
    user: null, //유저 정보
    isAdmin: false, //관리자 여부
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateLogin: (state, action) => {
            state.isLogin = action.payload;
        },
        updateUserInfo: (state, action) => {
            state.user = action.payload;
        },
        updateAdmin: (state) => {
            state.admin = !state.admin;
        }
    },
});
export const { updateLogin, updateUserInfo, updateAdmin } = userSlice.actions;

export default userSlice.reducer;