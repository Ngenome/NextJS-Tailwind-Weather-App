import { configureStore } from "@reduxjs/toolkit";
import forecastReducer from "./features";
import statusReducer from "./features/status";
import locationReducer from "./features/location";

const store = configureStore({
  reducer: {
    forecast: forecastReducer,
    status: statusReducer,
    location: locationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
