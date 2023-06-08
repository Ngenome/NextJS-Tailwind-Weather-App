import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Tab = "hourly" | "weekly";

const initialState = "hourly";

const activeTabSlice = createSlice({
  name: "activeTab",
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<Tab>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setActiveTab } = activeTabSlice.actions;
const activeTabReducer = activeTabSlice.reducer;
export default activeTabReducer;
