import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currMenu: "MYCLASSES" //현재 메뉴
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        updateCurrentMenu: (state, action) => {
            state.currMenu = action.payload;
        },
    },
});
export const { updateCurrentMenu } = menuSlice.actions;

export default menuSlice.reducer;