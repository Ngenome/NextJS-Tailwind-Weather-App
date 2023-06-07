import {
  setAutocompleteLocation,
  setLocation,
} from "../redux/features/location";
import locationReducer, { LocationState } from "../redux/features/location";

describe("locationSlice", () => {
  let initialState: LocationState;

  beforeEach(() => {
    initialState = {
      autocompleteLocation: null,
      location: {
        label: "",
        latitude: 0,
        longitude: 0,
      },
    };
  });

  it("should handle setAutocompleteLocation", () => {
    const newAutocompleteLocation = { name: "New Location" };
    const nextState = locationReducer(
      initialState,
      setAutocompleteLocation(newAutocompleteLocation)
    );
    expect(nextState.autocompleteLocation).toEqual(newAutocompleteLocation);
  });

  it("should handle setLocation", () => {
    const newLocation = {
      label: "New Label",
      latitude: 123.456,
      longitude: 789.012,
    };
    const nextState = locationReducer(initialState, setLocation(newLocation));
    expect(nextState.location).toEqual(newLocation);
  });
});
