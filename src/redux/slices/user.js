import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false, //로그인 여부
    userInfo: null //유저 정보

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateLogin: (state, action) => {
            state.isLogin = action.payload;
        },
        updateUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
    },
});
export const { updateLogin, updateUserInfo } = userSlice.actions;

export default userSlice.reducer;