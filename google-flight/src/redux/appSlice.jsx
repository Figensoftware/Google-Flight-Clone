import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: false,
    drawer: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
    },
})


export const { setTheme, setDrawer } = appSlice.actions;

export default appSlice.reducer;