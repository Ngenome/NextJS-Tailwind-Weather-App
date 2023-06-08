import activeTabReducer, { setActiveTab } from "../redux/features/tabs";

describe("activeTabSlice", () => {
  describe("reducer", () => {
    it("should set the active tab correctly", () => {
      const initialState = "hourly";
      const nextState = activeTabReducer(initialState, setActiveTab("weekly"));
      expect(nextState).toEqual("weekly");
    });
  });

  describe("actions", () => {
    it("should create an action to set the active tab", () => {
      const expectedAction = {
        type: "activeTab/setActiveTab",
        payload: "weekly",
      };
      expect(setActiveTab("weekly")).toEqual(expectedAction);
    });
  });
});
