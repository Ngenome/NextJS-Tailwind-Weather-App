import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LocationState {
  autocompleteLocation: any;
  location: {
    label: string;
    latitude: number;
    longitude: number;
  };
}

const initialState: LocationState = {
  autocompleteLocation: null,
  location: {
    label: "",
    latitude: 0,
    longitude: 0,
  },
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setAutocompleteLocation: (state, action: PayloadAction<any>) => {
      state.autocompleteLocation = action.payload;
    },
    setLocation: (
      state,
      action: PayloadAction<{
        label: string;
        latitude: number;
        longitude: number;
      }>
    ) => {
      state.location = action.payload;
    },
  },
});

export const { setAutocompleteLocation, setLocation } = locationSlice.actions;
const locationReducer = locationSlice.reducer;
export default locationReducer;
