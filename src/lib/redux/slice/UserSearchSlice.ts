import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: string;
}

const initialState: CounterState = {
  value: ""
}

const UserSearchSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getValueInput: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const {  getValueInput } = UserSearchSlice.actions;
export default UserSearchSlice.reducer;