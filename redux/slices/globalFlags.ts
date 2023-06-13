/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IIntialState {
  themeMode: 'light' | 'dark';
}
const initialState: IIntialState = {
  themeMode: 'light',
};
const globalFlagsSlice = createSlice({
  name: 'globalFlags-slice',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { setThemeMode } = globalFlagsSlice.actions;

export default globalFlagsSlice.reducer;
