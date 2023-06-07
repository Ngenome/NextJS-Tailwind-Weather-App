import statusReducer, {
  initialStatusState,
  setError,
  setLoading,
  setSuccess,
} from "@/redux/features/status";

describe("statusSlice", () => {
  it("should handle setLoading", () => {
    const nextState = statusReducer(initialStatusState, setLoading());
    expect(nextState.status).toBe("loading");
    expect(nextState.error).toBeNull();
  });
  it("should handle setError", () => {
    const errorMessage = "An error occurred";
    const nextState = statusReducer(initialStatusState, setError(errorMessage));
    expect(nextState.status).toBe("error");
    expect(nextState.error).toBe(errorMessage);
  });
  it("should handle setSuccess", () => {
    const nextState = statusReducer(initialStatusState, setSuccess());
    expect(nextState.status).toBe("success");
    expect(nextState.error).toBeNull();
  });
});
