import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Status = "idle" | "loading" | "error" | "success";

interface StatusState {
  status: Status;
  error: string | null;
}

export const initialStatusState: StatusState = {
  status: "idle",
  error: null,
};

const statusSlice = createSlice({
  name: "status",
  initialState: initialStatusState,
  reducers: {
    setLoading: (state) => {
      state.status = "loading";
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.status = "error";
      state.error = action.payload;
    },
    setSuccess: (state) => {
      state.status = "success";
      state.error = null;
    },
  },
});

export const { setLoading, setError, setSuccess } = statusSlice.actions;
const statusReducer = statusSlice.reducer;
export default statusReducer;
