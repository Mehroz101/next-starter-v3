// redux/slices/counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item { id: string; name: string; }
interface CounterState { value: number; items: Item[]; }

const initialState: CounterState = { value: 0, items: [] };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) { state.value += 1; },
    decrement(state) { state.value -= 1; },
    addItem(state, action: PayloadAction<Item>) {
      state.items.push(action.payload);
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
  },
});

export const { increment, decrement, addItem, removeItem } = counterSlice.actions;
export default counterSlice.reducer;
